import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

import com.dropbox.core.DbxException;

public class CopyFiles implements Runnable{
	private String SOURCE_FOLDER = "C:\\KNAgent\\Data";
	private String OUTPUT_FOLDER = "C:\\Users\\knadmin\\Desktop\\Data";
	private LoggerTest logger = new LoggerTest();
	private Dropbox d = null;
	private boolean alive = true;
	private String[] desiredFiles = null;

	public CopyFiles(String source, String output, LoggerTest mylogger, Dropbox dr, String[] lfiles, boolean uploading){
		SOURCE_FOLDER = source;
		OUTPUT_FOLDER = output;
		logger = mylogger;
		d = dr;
		desiredFiles = lfiles;
		alive = !uploading;
	}

	public CopyFiles(String source, String output, LoggerTest mylogger, Dropbox dr, boolean uploading){
		SOURCE_FOLDER = source;
		OUTPUT_FOLDER = output;
		logger = mylogger;
		d = dr;
		alive = !uploading;
	}

	public void run(){
		run(true);
	}

	public void kill(boolean uploading){
		alive = !uploading;
	}

	public void revive(boolean uploading){
		alive = !uploading;
	}

	public void run(boolean newbool) {
		alive = true;
		String temp = "";
		while(newbool){
			
			while (alive == false){
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			if (!(new File(OUTPUT_FOLDER).exists())){
				new File(OUTPUT_FOLDER).mkdir();
			}

				try {
					
					if (new File(SOURCE_FOLDER).exists()){
						//copies directories
						String[] mylist = new File(SOURCE_FOLDER).list();

						if (desiredFiles == null){
							String mystring = "";
							for(int i=0; i<mylist.length; i++){
								mystring+= (mylist[i] + ", ");
							}
							if (!mystring.equals(temp)){
								FileUtils.copyDirectory(new File(SOURCE_FOLDER), new File(OUTPUT_FOLDER));
								logger.log("copied " + mystring.substring(0,mystring.length()-2) + "\nfrom " + 
										SOURCE_FOLDER + " to " + OUTPUT_FOLDER);
							}
							temp = mystring;
							//give it a rest
							//System.out.println("copying");
							Thread.sleep(1000);
						}
						else{
							for(int j = 0; j < desiredFiles.length; j ++){
								for(int i = 0; i < mylist.length; i ++){
									if(mylist[i].contains(desiredFiles[j])){
										FileUtils.copyFileToDirectory(new File(mylist[i]), new File(OUTPUT_FOLDER));
									}
								}
							}
						}

					}
				} catch (IOException | InterruptedException | IllegalArgumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}


}


}


