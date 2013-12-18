/*
 * Controller.java
 * Program to capture page load screenshots and data, process and send.
 * 
 * @author Etai Klein 
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 */
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.mail.MessagingException;
import org.apache.commons.io.FileUtils;
import com.dropbox.core.DbxException;



public class Controller {
	

	private static Dropbox DROPBOX = new Dropbox();
	//how many runs do we want in our dropbox folder?
	private static final int BUFFER = 12;
	
	//additional files we want to copy to dropbox
	private static String[] t2 = new String[]{"formatchart8.py", "linedbase5.html", "waterfall.js", "waterfall4.css", "map.txt", "index.htm", "index.php", "README.txt"};
	//and the root of their location
	private static String FILES = "C:/Users/knadmin/workspace/www/src/src";

	//Dropbox filename
	public static String current_output = null;

	//Copy files from here
	private static String SOURCE_FOLDER = "C:/KNAgent/Data";
	//to here
	private static String OUTPUT_FOLDER = "C:/Users/knadmin/Desktop/temp";
	//then uploaded to here (not uploaded directly because of lag)
	private static String DROPBOX_FOLDER = "C:/Users/knadmin/Desktop/Dropbox/Apps/Waterfall";
	//When this process is running we start taking screencaps
	private static String PROCESS = "TxnPlaybackEngine.exe";

	//commented out section for local testing

	//			private static String SOURCE_FOLDER = "C:/wamp/www/src/external/FreeStopwatch/Langs";
	//			private static String OUTPUT_FOLDER = "C:/Users/Etai/Desktop/temp";
	//			private static String DROPBOX_FOLDER = "C:/Users/Etai/Desktop/Dropbox/Apps/Waterfall";
	//			private static String PROCESS = "firefox.exe";
	//			private static String FILES = "C:/wamp/www/src/src";

	public static void main(String args[]) throws IOException, MessagingException, NullPointerException{

		//deletes all files, but preserves directories
		DeleteDirectory df = new DeleteDirectory(OUTPUT_FOLDER);
		df.Delete();


		//creates a logfile
		LoggerTest logger = new LoggerTest(OUTPUT_FOLDER);
		logger.init();
		logger.log("created");

		//start the thread to copy files
		CopyFiles cf = new CopyFiles(SOURCE_FOLDER, OUTPUT_FOLDER, logger);
		Thread f = new Thread(cf);
		f.start();

		//start the thread to take screen captures
		Check ch = new Check(OUTPUT_FOLDER, PROCESS, logger);
		Thread c = new Thread(ch);
		logger.log("running screencapper");
		c.start();

		//choose the output file title
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy_MM_dd_HH_mm_ss");
		Date now = new Date();
		String strDate = sdfDate.format(now);
		current_output = DROPBOX_FOLDER + "/" + strDate;
		
		//the capture loop
		while(true){
			
			//rest
			try {
				Thread.sleep(1000);

			} catch (InterruptedException e3) {
				// TODO Auto-generated catch block
				e3.printStackTrace();
			}

			//Waiting for Check.java to let us know it has finished capturing images
			if (ch.isRunning() == 1){
				logger.log("processing....");
				
				try {
					//add the additional necessary files
					for (int i = 0; i < t2.length; i++)
						FileUtils.copyFileToDirectory(new File(FILES + "/" + t2[i]), new File(OUTPUT_FOLDER));
					//and upload it to Dropbox
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
						//There's no space to keep every run we do, so we keep the last few
						//TODO: better buffer structure. Perhaps the last 5 for each client (vodafone, walmart, etc.)
						DROPBOX.buffer(DROPBOX_FOLDER, DROPBOX, BUFFER);
					} catch (DbxException e) {
						e.printStackTrace();
					}
				}
				
				//let Check.java know we've finished uploading
				ch.setRunning(0);

				logger.log("round finished");
			}
		}
	}
}
