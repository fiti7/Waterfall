import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class CopyFiles implements Runnable{
	private String SOURCE_FOLDER = "C:\\KNAgent\\Data";
	private String OUTPUT_FOLDER = "C:\\Users\\knadmin\\Desktop\\Data";
	private LoggerTest logger = new LoggerTest();

	public CopyFiles(String source, String output, LoggerTest mylogger){
		SOURCE_FOLDER = source;
		OUTPUT_FOLDER = output;
		logger = mylogger;
	}
	
	@Override
	public void run() {

		while(true){
			try {
				if (!(new File(OUTPUT_FOLDER).exists())){
					new File(OUTPUT_FOLDER).mkdir();
				}
				if (FileUtils.sizeOf(new File(SOURCE_FOLDER)) != 0){
				//copies directories
					FileUtils.copyDirectory(new File(SOURCE_FOLDER), new File(OUTPUT_FOLDER));
					String[] mylist = new File(SOURCE_FOLDER).list();
					
					String mystring = "";
					for(int i=0; i<mylist.length; i++){
						mystring+= (mylist[i] + ", ");
					}
					logger.log("copied " + mystring.substring(0,mystring.length()-2));
					
					//give it a rest
					//System.out.println("copying");
					Thread.sleep(1000);
					
				
				}
				} catch (IOException | InterruptedException | IllegalArgumentException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			
		}
		
	}
		