



import java.io.File;
import java.util.ArrayList;

import com.dropbox.core.DbxException;


public class Renamer implements Runnable{
	LoggerTest logger = new LoggerTest();
	File afile = new File("");
	long starttime = System.nanoTime();
	Dropbox d = null;
	
	public Renamer(File bfile, LoggerTest mylogger){
		afile = bfile;
		logger = mylogger;
	}
	
	public Renamer(File bfile, LoggerTest mylogger, Dropbox db){
		afile = bfile;
		logger = mylogger;
		d = db;
	}
	
	public void setfile(String path){
		afile = new File(path);
	}
	
	public void setTime(){
		starttime = System.nanoTime();
	}
	
	public void run() {
		
		if (d != null){
		starttime = System.nanoTime();
		double name;
		
		ArrayList<String> myfiles = new ArrayList<String>();
		
		while(afile.exists()){
			//get all files 
			
			try {
				myfiles = d.ListFolders(afile.getAbsolutePath().replace("\\", "/"));
			} catch (NullPointerException | DbxException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			for (int i = 0; i <= myfiles.size(); i++){
				//if it hasnt been renamed

				//TODO: to save time, just remember the names and format it later.

				if(myfiles.get(i).length()!= 0 && new File(myfiles.get(i)).getName().contains("scap")){
					name = System.nanoTime() -  starttime;
					name = ((long)name/1000000000.0);
					//rename it
					File myfile = new File(afile.getPath()  + "\\" +String.format("%.3f",name)+".jpg");
					logger.log(myfiles.get(i) + " changed to" + name);
					boolean success = new File(myfiles.get(i)).renameTo(myfile);
				}

			}
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}


		}

		}
		else{
			starttime = System.nanoTime();
			double name;
			
			File[] myfiles;
			while(afile.exists()){
				//get all files 
				myfiles = afile.listFiles();
				for (int i = 0; i < myfiles.length; i++){
					//if it hasnt been renamed

					//TODO: to save time, just remember the names and format it later.
			try {
					if(myfiles[i].length()!= 0 && myfiles[i].getName().contains("scap")){
						name = System.nanoTime() -  starttime;
						name = ((long)name/1000000000.0);
						//rename it
						File myfile = new File(afile.getPath()  + "\\" +String.format("%.3f",name)+".jpg");
						logger.log(myfiles[i] + " changed to" + name);
						boolean success = myfiles[i].renameTo(myfile);
					}

				
				
					Thread.sleep(100);
				} catch (InterruptedException | ArrayIndexOutOfBoundsException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		}
	}


}
	}
}
