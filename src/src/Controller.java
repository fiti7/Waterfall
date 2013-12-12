
import java.io.File;
import java.io.IOException;
import java.net.SocketException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.mail.MessagingException;

import org.apache.commons.io.FileUtils;

import com.dropbox.core.DbxException;



public class Controller {
//	private static String SOURCE_FOLDER = "C:/wamp/www/src/external/FreeStopwatch/Langs";
//	private static String OUTPUT_FOLDER = "C:/Users/Etai/Desktop/temp";
//	private static String DROPBOX_FOLDER = "C:/Users/Etai/Desktop/Dropbox/Apps/Waterfall";
//	private static String PROCESS = "firefox.exe";
//	private static String FILES = "C:/wamp/www/src/src";
	private static Dropbox DROPBOX = new Dropbox();
	private static String[] t = new String[]{"TransData.dat"};
	private static String[] t2 = new String[]{"formatchart6.py", "linedbase3.php", "waterfall.js", "waterfall3.css", "map.txt", "index.htm", "index.php", "README.txt"};
	public static String current_output = null;
	private static boolean uploading;

			private static String SOURCE_FOLDER = "C:/KNAgent/Data";
			private static String OUTPUT_FOLDER = "C:/Users/knadmin/Desktop/temp";
			private static String DROPBOX_FOLDER = "C:/Users/knadmin/Desktop/Dropbox/Apps/Waterfall";
			private static String PROCESS = "TxnPlaybackEngine.exe";
			private static String FILES = "C:/Users/knadmin/workspace/www/src";

	public static void main(String args[]) throws IOException, MessagingException, NullPointerException{

		//delete and recreate filestructure on first run
			DeleteDirectory df = new DeleteDirectory(OUTPUT_FOLDER);
			df.Delete();

		
		//Runtime rt = Runtime.getRuntime();
		//rt.exec("cmd /c c:\\path\\to\\python python\\test.py");
		LoggerTest logger = new LoggerTest(OUTPUT_FOLDER);
		logger.init();
		logger.log("created");

		//initialize the thread to copy files as the agent runs. 

		
		CopyFiles cf = new CopyFiles(SOURCE_FOLDER, OUTPUT_FOLDER, logger, null, t, uploading);
		Thread f = new Thread(cf);
		f.start();
		
		//start the thread to take screencaps
		Check ch = new Check(OUTPUT_FOLDER, PROCESS, logger, uploading);
		Thread c = new Thread(ch);
		logger.log("running screencapper");
		c.start();
		
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy_MM_dd_HH_mm_ss");
		
		Date now = new Date();
		String strDate = sdfDate.format(now);
		current_output = DROPBOX_FOLDER + "/" + strDate;

		while(true){

			try {
				Thread.sleep(1000);
				
			} catch (InterruptedException e3) {
				// TODO Auto-generated catch block
				e3.printStackTrace();
			}
			
			//TODO: switch to Notifier system.
			if (ch.isRunning() == 1){
			logger.log("processing....");
			//add the files needed to run it
			try {
				for (int i = 0; i < t2.length; i++)
				FileUtils.copyFileToDirectory(new File(FILES + "/" + t2[i]), new File(OUTPUT_FOLDER));

				
				DROPBOX.recursiveUpload(OUTPUT_FOLDER, current_output);
				

			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} //mail me the result
			catch(RuntimeException e2){
				e2.printStackTrace();
			} catch (DbxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
			finally{				
				//rename the output
				now = new Date();
				strDate = sdfDate.format(now);
				current_output = DROPBOX_FOLDER + "/" + strDate;
				
				//delete old files
				df = new DeleteDirectory(OUTPUT_FOLDER);
				df.Delete();
				try {
					DROPBOX.buffer(DROPBOX_FOLDER, DROPBOX);
				} catch (DbxException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			ch.setRunning(0);
			
			logger.log("round finished");
			}
		}
	}
}

/**



Also this: data: [
      {y: 34.4, color: 'red'},     // this point is red
      21.8,                        // default blue
      {y: 20.1, color: '#aaff99'}, // this will be greenish
      20]                          // default blue

**/