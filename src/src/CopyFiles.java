/*
 * CopyFiles.java
 * Thread to work in the background of a server running a web performance agent
 * Copies files recursively and periodically from one directory to another
 * 
 * @author Etai Klein
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 */

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;

public class CopyFiles implements Runnable{
	private String SOURCE_FOLDER = "";
	private String OUTPUT_FOLDER = "";
	private LoggerTest logger = null;

	public CopyFiles(String source, String output, LoggerTest mylogger){
		SOURCE_FOLDER = source;
		OUTPUT_FOLDER = output;
		logger = mylogger;
	}

	public void run() {
		String temp = "";
		while(true){

			//sanity check - do I have a folder to copy to?
			if (!(new File(OUTPUT_FOLDER).exists())){
				new File(OUTPUT_FOLDER).mkdir();
			}

			try {

				//if my source exists
				if (new File(SOURCE_FOLDER).exists()){
					//list the folders
					String[] mylist = new File(SOURCE_FOLDER).list();

					//clear and rebuild a list of the contents
					String mystring = "";
					for(int i=0; i<mylist.length; i++){
						mystring+= (mylist[i] + ", ");
					}
					//if there is a change, copy the new files
					if (!mystring.equals(temp)){
						FileUtils.copyDirectory(new File(SOURCE_FOLDER), new File(OUTPUT_FOLDER));
						logger.log("copied " + mystring.substring(0,mystring.length()-2) + "\nfrom " + 
								SOURCE_FOLDER + " to " + OUTPUT_FOLDER);
					}
					temp = mystring;
					//give it a rest
					Thread.sleep(1000);
				}
			}
			catch (IOException | InterruptedException | IllegalArgumentException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
