/*
 * LoggerTest.java
 * Built for custom logging
 * 
 * 
 * @author Etai Klein
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 */

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.io.BufferedWriter;
import java.text.SimpleDateFormat;
import java.util.Date;


public class LoggerTest {
	public static String PATH = "C:\\Users\\knadmin\\workspace\\www\\src\\Data\\logger";
	//formats for naming
	private static SimpleDateFormat sdfDate = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss.SSS");
	private static SimpleDateFormat nameformat = new SimpleDateFormat("MM-dd-yyyy-HH-mm-ss-SSS");
	//for multiple files case
	private static String fullpath = "";

	public LoggerTest(){}

	public LoggerTest(String path){
		PATH = path;
	}

	public boolean init(){
		//clear the file
		fullpath = PATH + "\\" + String.valueOf("log-" + nameformat.format(new Date())) + ".txt";
		File file = new File(fullpath);
		file.delete();
		
		
		boolean success = false;
		try {
			success = file.createNewFile();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return success; } 

	//adds to log file and also prints to console. Any other measurements you want to add go here.
	public void log(String mystring){
		try {
			System.out.println(mystring);
			PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(fullpath, true)));
			out.println(sdfDate.format(new Date()));
			out.println(mystring);
			out.close();
		} catch (IOException e) {
		} 
	}

	public String getPath(){
		return fullpath;
	}

	//prints the logfile
	public String toString(){
		String mystring = "";
		InputStream input;
		try {
			//streams the file
			input = new BufferedInputStream(new FileInputStream(fullpath));

			byte[] buffer = new byte[8192];

			for (int length = 0; (length = input.read(buffer)) != -1;) {
				//writes it to the console
				System.out.write(buffer, 0, length);
				mystring += length;

			}input.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//also returns a string representation
		return mystring;
	}

}