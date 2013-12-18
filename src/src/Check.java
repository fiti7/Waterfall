/*
 * Check.java
 * Thread to work in the background of a server running a web performance agent
 * Takes screencaps whenever the agent is running
 * 
 * @author Etai Klein 9/1/13
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 */
import java.awt.Dimension;
import java.awt.Toolkit;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Check implements Runnable{

	private String target_path = "";
	private String process = "";

	//used to buffer uploading screencaps
	private int ran = 0; 

	//help find and track the running process
	private boolean change = false;
	private boolean found = false;
	private boolean lastfound = false;

	//for logging
	private static LoggerTest logger = null;

	//to kill screencapture
	public static Process screencapProcess = null;

	//to rename the files 
	private static Renamer re = new Renamer(null, logger);

	//to crop the images
	private Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
	private double width = screenSize.getWidth();
	private double height = screenSize.getHeight();

	public Check(String source, String pross, LoggerTest mylogger) {
		target_path = source + "/ScreenCaps";
		process = pross;
		logger = mylogger;
	}


	public void run() {
		ran = 0; 
		//check if we are running to start
		if (this.AmIRunning()){
			this.SetFound(true);
			this.SetLastFound(true);
			System.out.println("I started running");
			if (screencapProcess== null){
				screencapProcess= this.startScreencap(target_path);

			}
		}

		//loop check if a browser has been opened or closed.
		while(true){
			//waits for the browser to be opened or closed
			this.waitForChange();

			//and change the variables accordingly
			this.SetChange(false);
			this.SetLastFound(this.GetFound());

			//Once a browser has been opened or closed capture screen or stop capture.
			if (this.GetFound() == true){
				screencapProcess= this.startScreencap(target_path);
				logger.log("capturing");
			}
			else {
				//stop the screencap
				if (this.GetFound() == false){
					logger.log("stopping capture");
					this.stopScreencap();
				}
			} 


		}
	}

	//is the browser running?
	public boolean AmIRunning(){
		//code snippet next 18 lines modified from http://www.rgagnon.com/javadetails/java-0593.html
		List<String> processes = new ArrayList<String>();
		try {
			String line;
			Process p = Runtime.getRuntime().exec("tasklist.exe /fo csv /nh");
			BufferedReader input = new BufferedReader
					(new InputStreamReader(p.getInputStream()));
			while ((line = input.readLine()) != null) {
				if (!line.trim().equals("")) {
					// keep only the process name
					line = line.substring(1);
					processes.add(line.substring(0, line.indexOf("\"")));
				}
			}
			input.close();
		}
		catch (Exception err) {
			err.printStackTrace();
		}

		return (processes.contains(process));
	}

	//sleeps until the agent changes state from starting to stopping or vice versa
	public void waitForChange(){
		//until lastfound != found...
		while (this.GetChange() == false){

			//Is the current process running?
			if (this.AmIRunning()) {
				//if so, lastfound = found
				this.SetLastFound(this.GetFound());
				//and we found it to be running
				this.SetFound(true);

				//wait a second
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			else{
				//set lastfound = found
				this.SetLastFound(this.GetFound());
				//and it is not running
				this.SetFound(false);
				//wait a second
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}

			if (this.GetFound() != this.GetLastFound()){
				this.SetChange(true);
			}
		}
	}	


	public Process startScreencap(String path){
		try {

			//the runtime will let us execute external programs (like the screencapper)
			Runtime rt = Runtime.getRuntime();
			//reset tracking
			Process screencapProcess = null;
			//sanity check- does this file already exist?
			if (!(new File(path).exists())){
				new File(path).mkdir();

			}

			//start the screencapture renamer. 
			//This will be unnecessary with a better screencap process 
			re = new Renamer(null, logger);
			re.setfile(path);
			re.setTime();
			Thread r = new Thread(re);
			logger.log("running renamer");
			r.start();
			

			logger.log("mypath = " + path);

			//TODO: fill in more accurate screencap process and nix renamer
			screencapProcess = rt.exec("C:\\VLC\\vlc screen:// --dshow-vdev=screen-capture-recorder --screen-width="+(width)+" --screen-height=" + (height-50) + "--dshow-fps=5 -I dummy --dummy-quiet --rate=1 --video-filter=scene --vout=dummy --scene-format=jpg --scene-ratio=1 --scene-prefix=snap --scene-path=" + path +" --scene-prefix=scap vlc://quit");

			return screencapProcess;
		} catch (IOException e) {
			e.printStackTrace();
		} 
		return null;
	}

	//stops capture and notifies the controller
	public void stopScreencap(){
		System.out.println("ceasing capture");
		screencapProcess.destroy();
		screencapProcess = null;
		//TODO: doublecheck vlc is not still running, end it if it is.
		//this signals to Controller.java to process and send the data.
		this.setRunning(1);
		logger.log("prepping for processing");
		//kill the renamer if it runs too long
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		re.stop();
	}




	//setters and getters
	public String GetProcess(){return process;}
	public boolean GetFound(){return found;}
	public void SetFound(boolean newFound){found = newFound;return;}
	public boolean GetLastFound(){return lastfound;}
	public void SetLastFound(boolean newFound){lastfound = newFound;return;}
	public boolean GetChange(){return change;}
	public void SetChange(boolean newChange){change = newChange;return;}
	public int isRunning() {return ran;}
	public void setRunning(int running) {this.ran = running;}

}