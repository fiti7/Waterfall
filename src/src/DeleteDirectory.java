/*
 * DeleteDirectory.java
 * Recursively deletes the Files in a Directory
 * 
 * @author Etai Klein
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 */
import java.io.File;
import java.io.IOException;

public class DeleteDirectory{
	public String SRC_FOLDER = "";

	public DeleteDirectory(String source){
		SRC_FOLDER = source;
	}

	public void Delete(){

		File directory = new File(SRC_FOLDER);

		//make sure directory exists
		if(directory.exists()){
			try{
				delete(directory);

			}catch(IOException e){
				e.printStackTrace();
			}
		}
		System.out.println("Done Deleting");
	}

	public void delete(File file) throws IOException{

		if(file.isDirectory()){

			//if directory is empty, then delete it
			if(file.list().length==0){
		//If you don't want to preserve directory structure, recomment this in

				//file.delete();
				System.out.println("Directory is not deleted : " 
						+ file.getAbsolutePath());

			}else{

				//list all the directory contents
				String files[] = file.list();

				for (String temp : files) {
					//reconstruct the directory structure
					File fileDelete = new File(file, temp);

					//recursively delete
					delete(fileDelete);
				}
				
				
				//check the directory again, if empty then delete it
				if(file.list().length==0){
	//If you don't want to preserve directory structure, recomment this in
					//file.delete();
					System.out.println("Directory is not deleted : " 
							+ file.getAbsolutePath());
				}
			}

		}else{
			//if file, then delete it
			file.delete();

			//replace the old source directory if it was deleted
			new File(SRC_FOLDER).mkdir();

		}
	}
}