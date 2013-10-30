import java.io.IOException;
import java.util.logging.*;

 
public class LoggerTest {
 private final static Logger logger = Logger.getLogger(LoggerTest.class.getName());
 private static FileHandler fh = null;
 
 public static void init(){
 try {
 fh=new FileHandler("C:\\Users\\knadmin\\Desktop\\Data\\logger.log", false);
 } catch (IOException e) {
 e.printStackTrace();
 }
 Logger l = Logger.getLogger("");
 fh.setFormatter(new SimpleFormatter());
 l.addHandler(fh);
 l.setLevel(Level.CONFIG);
 } 
 
 public void log(String mystring){
	 logger.log(Level.INFO, mystring);
 }
 
 public static void main(String[] args) {
 LoggerTest.init();
 
 logger.log(Level.INFO, "message 1");
 logger.log(Level.SEVERE, "message 2");
 logger.log(Level.FINE, "message 3");
 }
}