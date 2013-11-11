import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.BufferedWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

 
public class LoggerTest {
 public static String PATH = "C:\\Users\\knadmin\\Desktop\\Data\\logger";
 private static SimpleDateFormat sdfDate = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss.SSS");
 private static String fullpath = "";
 
 public LoggerTest(){}
 
 public LoggerTest(String path){
	 PATH = path;
 }
 
 public static void init(){
//clear the file
	fullpath = PATH + String.valueOf(System.currentTimeMillis()).substring(8, 13) + ".txt";
	File file = new File(fullpath);
	file.delete();
	
	try {
		file.createNewFile();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	 } 
 
 public void log(String mystring){
	 try {
		    PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(fullpath, true)));
		    out.println(sdfDate.format(new Date()));
		    out.println(mystring);
		    out.close();
		} catch (IOException e) {
		} 
	 }
 

 
public static void main(String[] args) {
 LoggerTest logger = new LoggerTest("C:\\wamp\\www\\src\\logger");
 LoggerTest.init();
 logger.log("message1");
 logger.log("message2");

 }
}