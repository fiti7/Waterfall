
import java.io.File;
import java.io.IOException;

import com.dropbox.core.DbxException;

public class DeleteDirectory{
	
	private Dropbox d = null;
	
	public String SRC_FOLDER = "C:\\Users\\knadmin\\Desktop\\Data";

	public DeleteDirectory(String source){
		SRC_FOLDER = source;
	}
	
	public DeleteDirectory(String source, Dropbox db){
		SRC_FOLDER = source;
		d = db;
	}

	public void Delete(){

		File directory = new File(SRC_FOLDER);

		//make sure directory exists
		if(!directory.exists()){

			System.out.println("Directory does not exist.");
			System.exit(0);

		}else{

			try{

				delete(directory);

			}catch(IOException e){
				e.printStackTrace();
				System.exit(0);
			}
		}

		System.out.println("Done");

	}

	public void delete(File file)
			throws IOException{

		if(file.isDirectory()){

			//directory is empty, then delete it
			if(file.list().length==0){

				//file.delete();
				System.out.println("Directory is not deleted : " 
						+ file.getAbsolutePath());

			}else{

				//list all the directory contents
				String files[] = file.list();

				for (String temp : files) {
					//construct the file structure
					File fileDelete = new File(file, temp);

					//recursive delete
					delete(fileDelete);
				}

				//check the directory again, if empty then delete it
				if(file.list().length==0){
					//file.delete();
					System.out.println("Directory is not deleted : " 
							+ file.getAbsolutePath());
				}
			}

		}else{
			//if file, then delete it
			if (d != null){
			file.delete();
			}
			else{
			try {
				d.DeleteFile(file.getAbsolutePath());
			} catch (DbxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			}
			System.out.println("File is deleted : " + file.getAbsolutePath());

		}    
		//REPLACE THE OLD DIRECTORY
		new File(SRC_FOLDER).mkdir();

	}
}