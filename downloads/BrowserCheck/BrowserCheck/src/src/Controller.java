import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;


public class Controller {
	private static String SOURCE_FOLDER = "C:\\wamp\\www\\TestDataIn";
	private static String OUTPUT_FOLDER = "C:\\wamp\\www\\TestDataOut";
	private static String PROCESS = "firefox.exe";
	
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
		
		//sample data to test moving files
		String txtpath = "C:\\wamp\\www\\TestDataIn\\" + System.currentTimeMillis() + ".txt";
		PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(txtpath, true)));
		out.println("asdf");
		out.close();
		
		txtpath = "C:\\wamp\\www\\TestDataIn\\" + System.currentTimeMillis() + ".txt";
		out = new PrintWriter(new BufferedWriter(new FileWriter(txtpath, true)));
		out.println("asdf");
		out.close();
		
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	///mail me the result
		System.out.println("trying to mail");
			Mail2 m = new Mail2(OUTPUT_FOLDER);
			//m.zipandmail();
			System.out.println("mailem");
	//Delete the Directory
			DeleteDirectory d = new DeleteDirectory(OUTPUT_FOLDER);
			d.Delete();
			
			
			System.out.println("destroy the evidence");
	//wait  ten minutes
	try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
//	}
}
