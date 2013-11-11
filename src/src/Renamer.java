



import java.io.File;


public class Renamer implements Runnable{
	LoggerTest logger = new LoggerTest();
	File afile = new File("");

	public Renamer(File bfile, LoggerTest mylogger){
		afile = bfile;
		logger = mylogger;
	}

	public void run() {
	        long starttime = System.nanoTime();
			double name;
			String filenames;
			//psuedocode. 
	        //get foldername. 			
			
			
	        //startwatch
			File[] myfiles;
			while(afile.exists()){
				//get all files 
				myfiles = afile.listFiles();
				for (int i = 0; i < myfiles.length; i++){
					//if it hasnt been renamed
					
					if(myfiles[i].length()!= 0 && myfiles[i].getName().contains("scap")){
						System.out.println(myfiles[i].getName());
						name = System.nanoTime() -  starttime;
						name = ((long)name/1000000000.0);
						//rename it
						File myfile = new File(afile.getPath()  + "\\" +String.format("%.3f",name)+".jpg");
						logger.log(myfiles[i] + " changed to" + name);
						boolean success = myfiles[i].renameTo(myfile);
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

	
}