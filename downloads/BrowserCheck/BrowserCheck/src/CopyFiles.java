import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

public class CopyFiles implements Runnable{
	private static final String SOURCE_FOLDER = "C:\\KNAgent\\Data";
	private static final String OUTPUT_FOLDER = "C:\\Users\\knadmin\\Desktop\\Data";
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
					LoggerTest logger = new LoggerTest();
					logger.log(String.valueOf(new File(SOURCE_FOLDER).list()));
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
		