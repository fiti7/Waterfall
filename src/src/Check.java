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
	
	private String Msource = "";
	private String SOURCE_PATH = "C:\\Users\\knadmin\\Desktop\\Data";
	private String PROCESS = "TxnPlaybackEngine.exe";
	//mailed is used to buffer mailing screencaps
	private Dropbox DROPBOX = null;
	private int mailed = 0; 
	private boolean change = false;
	private boolean found = false;
	private boolean lastfound = false;
	private static LoggerTest logger = new LoggerTest();
	public static Process screencapProcess = null;
	private static Renamer re = new Renamer(null, logger);
	long starttime = System.nanoTime();

	public Check(String source, String process, LoggerTest mylogger, Dropbox d) {
		Msource = source;
		SOURCE_PATH = source + "\\ScreenCaps";
		PROCESS = process;
		logger = mylogger;
		DROPBOX = d;
	}

	public void run() {
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyyMMddHHmmss");
		Date now = new Date();

		String strDate = sdfDate.format(now);



		//define the path the pictures will be dumped to.
		String path = SOURCE_PATH;// + strDate;
		System.out.println("mypath = " + path);

		//check if we are running to start
		if (this.AmIRunning()){
			this.SetFound(true);
			this.SetLastFound(true);
			System.out.println("I started running");
			if (screencapProcess== null){
				path = SOURCE_PATH;// + sdfDate.format(new Date());
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
				path = SOURCE_PATH;// + sdfDate.format(new Date());
				screencapProcess= this.startScreencap(path);
				logger.log("capturing");
			}
			else {
				//stop the screencap
				if (this.GetFound() == false){
					logger.log("stopping capture");
					this.stopScreencap();
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
			//Delete the Directory
			DeleteDirectory df = new DeleteDirectory(Msource, DROPBOX);
			df.Delete();
			
			Runtime rt = Runtime.getRuntime();
			Process screencapProcess = null;
			//sanity check- does this file already exist?
			if (!(new File(path).exists())){
				new File(path).mkdir();

			}
			
			re.setfile(path);
			re.setTime();
			Thread r = new Thread(re);

			logger.log("running renamer");
			r.start();
			starttime = System.nanoTime();
			float calc = 0;
			logger.log("mypath = " + path);

			//TODO: find a way to get the timestamp using vlc
			screencapProcess = rt.exec("C:\\VLC\\vlc screen:// --dshow-vdev=screen-capture-recorder --dshow-fps=5 -I dummy --dummy-quiet --rate=1 --video-filter=scene --vout=dummy --scene-format=jpg --scene-ratio=1 --scene-prefix=snap --scene-path=" + path +" --scene-prefix=scap vlc://quit");

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

	public void stopScreencap(){
		System.out.println("ceasing capture");
		screencapProcess.destroy();
		screencapProcess = null;
		this.setMailed(1);
		logger.log("prepping for processing");
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
	

	public int isMailed() {
		return mailed;
	}

	public void setMailed(int mailed) {
		this.mailed = mailed;
	}

	public static String getTime(long starttime, float calc){
		String mystring = String.valueOf((calc = (float) (((long)System.nanoTime() - starttime)/1000000000.00))).substring(0, 7); 
		//Math.max(0, String.valueOf(calc).length() - 5));
		logger.log(mystring + " created");
		System.out.println(mystring + " created");
		return mystring;
	}

	public static void main(String[] args) throws InterruptedException, IOException{
		long starttime = (long)System.nanoTime();
		float calc = 0;
		//		Thread.sleep(1000);
		//		long check = ((long)System.nanoTime() - starttime);
		//		System.out.println(getTime(starttime, calc));
		//		System.out.println((""+((long)System.nanoTime() - starttime)/1000000000.00).replaceAll("(.*)(\\d{5}$)","$2"));
		//		System.out.println((""+((long)System.nanoTime() - starttime)/1000000000.00).replaceAll("(\\d{5})(.*)$","$1"));
		//		System.out.println(String.format("%" + String.valueOf(Long.MAX_VALUE).length() + "d",(((long)System.nanoTime() - starttime))).substring(String.valueOf(Long.MAX_VALUE).length()-5,String.valueOf(Long.MAX_VALUE).length()));
		//		System.out.println(String.format( String.format("%" + String.valueOf(Long.MAX_VALUE).length() + "d",(((long)System.nanoTime() - starttime))).substring(String.valueOf(Long.MAX_VALUE).length()-15,String.valueOf(Long.MAX_VALUE).length())));
//		LoggerTest logger = new LoggerTest("C:\\Users\\knadmin\\workspace\\www\\src\\Data");
//		logger.init();
//		System.out.println(logger.getPath());
//		//		String lp = logger.getPath();
//
//		//alt way. - save this for later 
//		//take a single screencap
//		Thread r = new Thread(new Renamer(new File("C:\\Users\\knadmin\\workspace\\www\\src\\Data"), logger));
//
//		logger.log("running renamer");
//		r.start();
		//		for (int i=0;i<10;i++){
		//			//test results. At 1sec per capture, it works with ~.2 precision. This breaks at less than a second.
		//			Thread.sleep(100); 
		//		Runtime.getRuntime().exec("C:\\VLC\\vlc screen:// "
		//				+ "--dshow-vdev=screen-capture-recorder --dshow-fps=10 -I dummy --dummy-quiet --rate=1 --video-filter=scene --vout=dummy --scene-format=jpg --scene-ratio=1 --scene-prefix=snap "
		//				+ "--scene-path=" + "C:\\wamp\\www\\src\\Data" +" --no-snapshot-sequential --scene-prefix=scap" + getTime(starttime, calc) + " --run-time=0.01 vlc://quit ");
		//		//TODO: logfile --logfile(string)    --logfile("+logger.getPath().replace("\\", "\\\\")+")

		Runtime.getRuntime().exec("C:\\VLC\\vlc screen:// " 
				+ "--dshow-vdev=screen-capture-recorder --dshow-fps=1 -I dummy --dummy-quiet --rate=1 --video-filter=scene --vout=dummy --scene-format=jpg --scene-ratio=1 --scene-prefix=snap "
				+ "--scene-path=" + "C:\\wamp\\www\\src\\Data" +" --no-snapshot-sequential --scene-prefix=scap" + getTime(starttime, calc) + " --run-time=6 vlc://quit ");


	}


}

