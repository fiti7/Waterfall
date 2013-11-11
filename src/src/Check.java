/*
 * Program to work in the background of a server running a web performance agent
 * Takes screencaps whenever a browser is running
 * 
 * @author Etai Klein 9/1/13
 * 
 * 
 */

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//TODO: Split into model/view/controller that automatically senses device/browser type

public class Check implements Runnable{
	
	private String SOURCE_PATH = "C:\\Users\\knadmin\\Desktop\\Data\\ScreenCapAt";
	private String PROCESS = "TxnPlaybackEngine.exe";
	private boolean change = false;
	private boolean found = false;
	private boolean lastfound = false;
	private static LoggerTest logger = new LoggerTest();
	long starttime = System.nanoTime();
	
	public Check(String source, String process, LoggerTest mylogger) {
		SOURCE_PATH = source + "\\ScreenCapAt";
		PROCESS = process;
		logger = mylogger;
	}
	
	public void run() {
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyyMMddHHmmss");
		Date now = new Date();
		
		String strDate = sdfDate.format(now);
		
		
		
		//define the path the pictures will be dumped to.
		String path = SOURCE_PATH + strDate;
		System.out.println("mypath = " + path);
		Process screencapProcess= null;

		//check if we are running to start
		if (this.AmIRunning()){
			this.SetFound(true);
			this.SetLastFound(true);
			System.out.println("I started running so I'm setting my things to true");
			if (screencapProcess== null){
				path = SOURCE_PATH + sdfDate.format(new Date());
				screencapProcess= this.startScreencap(path);
				
			}
		}


		//loop check if a browser has been opened or closed.
		while(true){
			this.waitForChange();
			this.SetChange(false);
			this.SetLastFound(this.GetFound());
			
			//Once a browser has been opened or closed capture screen or stop capture.
			if (this.GetFound() == true){
				path = SOURCE_PATH + sdfDate.format(new Date());
				screencapProcess= this.startScreencap(path);
				logger.log("capturing");
			}
			else {
				//stop the screencap
				if (this.GetFound() == false){
					logger.log("stopping capture");
					this.stopScreencap(screencapProcess);
				}
			}
			this.clean(path);
		}
	}

	public boolean AmIRunning(){
		//code snippet next 18 lines from http://www.rgagnon.com/javadetails/java-0593.html
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

		return (processes.contains(PROCESS));
	}

	public void waitForChange(){
		while (this.GetChange() == false){
			if (this.AmIRunning()) {
				//System.out.println("I am running");
				this.SetLastFound(this.GetFound());
				this.SetFound(true);

				//wait a second
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			else{
				this.SetLastFound(this.GetFound());
				this.SetFound(false);
				//ystem.out.println("I am not running");
				//wait a second
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
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
		Runtime rt = Runtime.getRuntime();
		Process screencapProcess = null;
		//sanity check- does this file already exist?
		if (!(new File(path).exists())){
		new File(path).mkdir();
		
		}

		Thread r = new Thread(new Renamer(new File(path), logger));
		
		logger.log("running renamer");
		r.start();
		starttime = System.nanoTime();
		logger.log("mypath = " + path);

			screencapProcess = rt.exec("C:\\VLC\\vlc screen:// --dshow-vdev=screen-capture-recorder --dshow-fps=10 -I dummy --dummy-quiet --rate=1 --video-filter=scene --vout=dummy --scene-format=jpg --scene-ratio=1 --scene-prefix=snap --scene-path=" + path +" --scene-prefix="+ "scap" +	( String.valueOf(((long)System.nanoTime() - starttime)).substring(10, 15))+" vlc://quit ");
		
		return screencapProcess;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
		return null;
	}
	
	public void clean(String path){
	for (File file : new File(path).listFiles()){	
	         if (file.length() == 0){
	        	 file.delete();
	         }
	}
	}
	
	public void stopScreencap(Process screencapProcess){
		//System.out.println("ceasing capture");
		screencapProcess.destroy();
		screencapProcess = null;
	}

	public String GetProcess(){
		return PROCESS;
	}

	public boolean GetFound(){
		return found;
	}
	public void SetFound(boolean newFound){
		found = newFound;
		return;
	}
	public boolean GetLastFound(){
		return lastfound;
	}
	public void SetLastFound(boolean newFound){
		lastfound = newFound;
		return;
	}
	public boolean GetChange(){
		return change;
	}
	public void SetChange(boolean newChange){
		change = newChange;
		return;
	}

}

