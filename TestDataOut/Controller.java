
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;



public class Controller {
	private static String SOURCE_FOLDER = "C:\\wamp\\www\\TestDataIn";
	private static String OUTPUT_FOLDER = "C:\\wamp\\www\\TestDataOut";
	private static String PROCESS = "firefox.exe";
	//	private static String SOURCE_FOLDER = "C:\\KNAgent\\Data";
	//	private static String OUTPUT_FOLDER = "C:\\Users\\knadmin\\Desktop\\Data";
	//	private static String PROCESS = "TxnPlaybackEngine.exe";

	public static void main(String args[]) throws IOException{
		DeleteDirectory r = new DeleteDirectory(OUTPUT_FOLDER);
		r.Delete();
		DeleteDirectory s = new DeleteDirectory(SOURCE_FOLDER);
		s.Delete();


		//Runtime rt = Runtime.getRuntime();
		//rt.exec("cmd /c c:\\path\\to\\python python\\test.py");
		LoggerTest logger = new LoggerTest();
		LoggerTest.init();

		//start the thread to copy files as tHe agent runs. 
		Thread f = new Thread(new CopyFiles(SOURCE_FOLDER, OUTPUT_FOLDER, logger));
		System.out.println("running copier");
		f.start();

		//start the thread to take screencaps
		Thread c = new Thread(new Check(OUTPUT_FOLDER, PROCESS, logger));
		System.out.println("running screecapper");
		c.start();


		//while(true){
		System.out.println("loop starting");


		while(true){
			try {
				Thread.sleep(10000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

			Automate a = new Automate();
			a.run();
			System.out.println("automating");

			try {
				FileUtils.copyDirectory(new File("C:\\wamp\\www\\src\\src"), new File(OUTPUT_FOLDER));
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}

			//mail me the result
			System.out.println("trying to mail");
			Mail2 m = new Mail2(OUTPUT_FOLDER);
			m.zipandmail();
			System.out.println("mailem");



			//Delete the Directory
			DeleteDirectory d = new DeleteDirectory(OUTPUT_FOLDER);
			d.Delete();


			System.out.println("destroy the evidence");
			//wait  ten minutes
			try {
				Thread.sleep(10000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
