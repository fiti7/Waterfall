/**
 * Renamer.java
 * Renames Image Files by Timestamp
 * 
 * 
 * @author Etai Klein
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 **/

import java.io.File;

//Thread to rename images. Called by Check.java
public class Renamer implements Runnable{
	LoggerTest logger = new LoggerTest();
	File afile = new File("");
	long starttime = System.nanoTime();

	public Renamer(File bfile, LoggerTest mylogger){
		afile = bfile;
		logger = mylogger;
	}

//getters and setters
	public void setfile(String path){afile = new File(path);}
	public void setTime(){starttime = System.nanoTime();}

	//renames all files in a directory in a loop. 
	//TODO: stop this process after the directory is uploaded
	public void run() {
		//marks the current time
		starttime = System.nanoTime();
		double name;
		
		File[] myfiles;
		while(afile.exists()){
			//get all files 
			myfiles = afile.listFiles();
			for (int i = 0; i < myfiles.length; i++){
				//if it hasnt been renamed

				//TODO: to save time, just remember the name strings and format it later.
				try {
					//only change screencap names that aren't blank
					if(myfiles[i].length()!= 0 && myfiles[i].getName().contains("scap")){
						//get the time
						name = System.nanoTime() -  starttime;
						name = ((long)name/1000000000.0);
						//rename it
						File myfile = new File(afile.getPath()  + "\\" +String.format("%.3f",name)+".jpg");
						logger.log(myfiles[i] + " changed to" + name);
						@SuppressWarnings("unused")
						boolean success = myfiles[i].renameTo(myfile);
					}



					Thread.sleep(100);
				} catch (InterruptedException | ArrayIndexOutOfBoundsException e) {
					e.printStackTrace();
				}
			}
		}



	}
}
