import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.BufferedWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.*;

 
public class LoggerTest {
 public static String path = ".//logger.txt";
 private static SimpleDateFormat sdfDate = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss.SSS");
 
 public static void init(){
//clear the file
	File file = new File(path);
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
		    PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(path, true)));
		    out.println(sdfDate.format(new Date()));
		    out.println(mystring);
		    out.close();
		} catch (IOException e) {
		} 
	 }
 

 
 public static void main(String[] args) {
 LoggerTest logger = new LoggerTest();
 logger.init();
 logger.log("message1");
 }
}