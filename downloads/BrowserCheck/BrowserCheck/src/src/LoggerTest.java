import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.*;

 
public class LoggerTest {
 private final static Logger logger = Logger.getLogger(LoggerTest.class.getName());
 private static FileHandler fh = null;
 
 public static void init(){
 try {
 fh=new FileHandler("logger.log", false);
 } catch (IOException e) {
 e.printStackTrace();
 }
 Logger l = Logger.getLogger("");
 fh.setFormatter(new MyCustomFormatter());
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

private static class MyCustomFormatter extends SimpleFormatter {
	 SimpleDateFormat sdfDate = new SimpleDateFormat("HHmmss");

		@Override
		public String formatMessage(LogRecord record) {
			StringBuffer sb = new StringBuffer();
			sb.append(sdfDate.format(new Date()));
			sb.append(record.getMessage());
			sb.append("test");
			return sb.toString();
		}

		@Override
		public String format(LogRecord record) {
			StringBuffer sb = new StringBuffer();
			sb.append(sdfDate.format(new Date()));
			sb.append(record.getMessage());
			sb.append("test");
			return sb.toString();
		}
	}
}