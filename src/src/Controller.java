
import java.io.File;
import java.io.IOException;
import java.net.SocketException;

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
			private static String SOURCE_FOLDER = "C:/KNAgent/Data";
			private static String OUTPUT_FOLDER = "C:/Users/knadmin/Desktop/Data";
			private static String DROPBOX_FOLDER = "C:/Users/knadmin/Desktop/Dropbox/Apps/Waterfall";
			private static String PROCESS = "TxnPlaybackEngine.exe";
			private static String FILES = "C:/Users/knadmin/workspace/www/src/src";

	public static void main(String args[]) throws IOException, MessagingException, NullPointerException{
		
		//delete and recreate filestructure on first run
//			DeleteDirectory df = new DeleteDirectory(OUTPUT_FOLDER);
//			df.Delete();

		
		//Runtime rt = Runtime.getRuntime();
		//rt.exec("cmd /c c:\\path\\to\\python python\\test.py");
		LoggerTest logger = new LoggerTest(OUTPUT_FOLDER);
		logger.init();
		logger.log("created");

		//start the thread to copy files as tHe agent runs. 
		Thread f = new Thread(new CopyFiles(SOURCE_FOLDER, OUTPUT_FOLDER, logger));
		logger.log("running copier");
		f.start();

		//start the thread to take screencaps
		Check ch = new Check(OUTPUT_FOLDER, PROCESS, logger);
		Thread c = new Thread(ch);
		logger.log("running screencapper");
		c.start();


		while(true){
			//			Automate a = new Automate();
			//			a.run();
			//			logger.log("automating");
			try {
				Thread.sleep(100);
			} catch (InterruptedException e3) {
				// TODO Auto-generated catch block
				e3.printStackTrace();
			}
			
			//TODO: switch to Notifier system.
			if (ch.isMailed() == 1){
			logger.log("processing....");
			//add the files needed to run it
			try {
				FileUtils.copyDirectory(new File(FILES), new File(OUTPUT_FOLDER));
				DROPBOX.start();
				DROPBOX.recursiveUpload(OUTPUT_FOLDER, DROPBOX_FOLDER + "/" + System.currentTimeMillis());
				
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} //mail me the result
//			try{
//				logger.log("trying to mail");
//				Mail m = new Mail(OUTPUT_FOLDER, logger);
//				m.zipandmail();
//				logger.log("mailed");
//			}
//			
			catch(RuntimeException e2){
				e2.printStackTrace();
			} catch (DbxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			finally{
				try {
					DROPBOX.buffer(DROPBOX_FOLDER, DROPBOX);
				} catch (DbxException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}

			
			ch.setMailed(0);

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