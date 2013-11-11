
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class Automate{
	public String pythonPath = "C:\\python33\\python.exe";
	public String filePath = "C:\\wamp\\www\\src\\src\\formatchart4.py";
	private static Runtime rt = Runtime.getRuntime();

	public Automate(String pp, String fp){
		pythonPath = pp;
		filePath = fp;

	}

	public Automate() {
		// TODO Auto-generated constructor stub
	}

	public void run() {

		//is wamp running?
		//if not start it
//		if(!AmIRunning("wampmanager.exe")){
//			try {
//				rt.exec("cmd /c C:\\wamp\\wampmanager.exe");
//				System.out.println("runnning wamp");
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}

		//then run the python file
		//this will also call the php file
		try {
			System.out.println("running python files");
			Process process = Runtime.getRuntime().exec("C:\\Windows\\System32\\cmd.exe /c " + pythonPath + " " + filePath, null, new File("C:\\wamp\\www\\src\\src"));
			Scanner scanner = new Scanner(process.getInputStream());
			while (scanner.hasNext()) {
				System.out.println(scanner.nextLine());
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


	}


	public boolean AmIRunning(String PROCESS){
		//code snippet next 18 lines from http://www.rgagnon.com/javadetails/java-0593.html
		List<String> processes = new ArrayList<String>();
		try {
			String line;
			Process p = rt.exec("tasklist.exe /fo csv /nh");
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


	public static void main(String[] args){
		Automate a = new Automate();
		a.run();
	}
}