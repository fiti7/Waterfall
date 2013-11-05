
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;


public class Automate implements Runnable{
	public String pythonPath = "c:\\path\\to\\python";
	public String filePath = "C:\\wamp\\www\\formatchart4.py";
	
	public Automate(String pp, String fp){
		pythonPath = pp;
		filePath = fp;
		
	}
	
	@Override
	public void run() {
		Runtime rt = Runtime.getRuntime();
		try {
			rt.exec("cmd /c " + pythonPath + " " + filePath);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}
		//is wamp running?
	
		//if not start it
		
		//pick our files email everything one needs to run locally
		
//		
//		public boolean AmIRunning(String PROCESS){
//			//code snippet next 18 lines from http://www.rgagnon.com/javadetails/java-0593.html
//			List<String> processes = new ArrayList<String>();
//			try {
//				String line;
//				Process p = Runtime.getRuntime().exec("tasklist.exe /fo csv /nh");
//				BufferedReader input = new BufferedReader
//						(new InputStreamReader(p.getInputStream()));
//				while ((line = input.readLine()) != null) {
//					if (!line.trim().equals("")) {
//						// keep only the process name
//						line = line.substring(1);
//						processes.add(line.substring(0, line.indexOf("\"")));
//					}
//				}
//				input.close();
//			}
//			catch (Exception err) {
//				err.printStackTrace();
//			}
//
//			return (processes.contains(PROCESS));
//		}
	
}
