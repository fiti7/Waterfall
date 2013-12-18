/*
 * Dropbox.java
 * Useful functions from the Dropbox API
 * 
 * 
 * @author Etai Klein
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 */
import com.dropbox.core.*;

import java.io.*;
import java.util.ArrayList;
import java.util.Locale;

public class Dropbox {

	//all dropbox apps require this to log in and use dropbox
	final String APP_KEY = "4a09sz1p6zl7mm2";
	final String APP_SECRET = "pk6ggm5pc4n885s";

	private DbxClient client;

	public Dropbox(){

		DbxAppInfo appInfo = new DbxAppInfo(APP_KEY, APP_SECRET);

		DbxRequestConfig config = new DbxRequestConfig("JavaTutorial/1.0",
				Locale.getDefault().toString());
		DbxWebAuthNoRedirect webAuth = new DbxWebAuthNoRedirect(config, appInfo);

		// Have the user sign in and authorize your app.
		String authorizeUrl = webAuth.start();
		System.out.println("1. Go to: " + authorizeUrl);
		try {
			java.awt.Desktop.getDesktop().browse(java.net.URI.create(authorizeUrl));
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		System.out.println("2. Click \"Allow\" (you might have to log in first)");
		System.out.println("3. Copy the authorization code.");
		String code;
		try {
			code = new BufferedReader(new InputStreamReader(System.in)).readLine().trim();

			// This will fail if the user enters an invalid authorization code.
			DbxAuthFinish authFinish = webAuth.finish(code);

			client = new DbxClient(config, authFinish.accessToken);

			//will fail if not logged in correctly
			System.out.println("Linked account: " + client.getAccountInfo().displayName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (DbxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	//uploads a single file
	public void upload(String sourcepath, String targetpath) throws IOException, DbxException, FileNotFoundException{

		File inputFile = new File(sourcepath);
		FileInputStream inputStream = new FileInputStream(inputFile);

		targetpath = dbformat(targetpath);

		//ignore screencaps with no content (scaps) - and .dropbox file which can't be uploaded
		//TODO: should be changed when new screencapper is loaded
		if (!new File(sourcepath).getName().contains("scap") && !new File(sourcepath).getName().equals(".dropbox")){
			System.out.println("uploading " + sourcepath + " to " + targetpath);

			DbxEntry.File uploadedFile = client.uploadFile(targetpath,
					DbxWriteMode.add(), inputFile.length(), inputStream);
			System.out.println("Uploaded: " + uploadedFile.toString());
			inputStream.close();
		}
	}

	//modified listing. Used in recursive functions
	public ArrayList<String> ListFolders(String path)throws DbxException, NullPointerException{
		path = dbformat(path);
		DbxEntry.WithChildren listing = client.getMetadataWithChildren(path);
		ArrayList<String> children = new ArrayList<String>();
		for (DbxEntry child : listing.children) {
			children.add((path + child.path).replace("//", "/"));
		}
		System.out.println("Files in the root path: " + children.toString());
		return children;
	}

	//recursive uploading
	public void recursiveUpload(String sourcedir, String targetdir) throws DbxException, IOException, FileNotFoundException{

		//targetdir is dropbox-formatted path "Desktop/Dbox/Waterfall/Data => /Data"
		targetdir = dbformat(targetdir);

		//sourcedir is actual path of file. LastCharFormat sanity-checks paths.
		sourcedir = lastcharformat(sourcedir);
		targetdir = lastcharformat(targetdir);

		//If I am a directory
		if (new File(sourcedir).isDirectory()){
			//list my files
			File[] mlist = new File(sourcedir).listFiles();
			System.out.println("source: " + sourcedir + ", mylist: " + mlist + ", targetdir: " + targetdir);
			for(int i = 0; i < mlist.length; i++){
				System.out.println("newsource: " + mlist[i].getAbsolutePath() + " oldsource: " + sourcedir + ", newtarget: " + targetdir + "/" + 
						getname(sourcedir));
				//and try to upload each of those
				recursiveUpload(mlist[i].getAbsolutePath(), targetdir + "/" + 
						//add the end of the last source to keep directory structure.
						getname(mlist[i].getAbsolutePath())

						);
			}
		}
		else {
			//I am not a file. Commence uploading.
			upload(sourcedir, targetdir);
		}

	}

	//useful for deleting directly from Dropbox. Currently unused.
	public void recursiveDelete(String sourcedir) throws DbxException, IOException{
		System.out.println(sourcedir + " is a directory? " + new File(sourcedir).isDirectory());
		//sourcedir here is the dropbox-formatted path
		if (new File(sourcedir).isDirectory()){
			ArrayList<String> mlist = ListFolders(sourcedir);
			for(int i = 0; i < mlist.size(); i++){
				System.out.println("newfile: " + new File(sourcedir + "/" + getname(mlist.get(i))).getAbsolutePath().replace("\\", "/"));
				recursiveDelete(new File(sourcedir + "/" + getname(mlist.get(i))).getAbsolutePath().replace("\\", "/"));
			}
		}
		else {
			try{
				DeleteFile(sourcedir);
			}catch(IOException | DbxException e){
				e.printStackTrace();
			}
		}

	}


	//sanity checker for proper syntax
	public static String lastcharformat(String targetdir){
		//removes the last char if it's "\\" or "/"
		String lastchar = targetdir.substring(targetdir.length() - 1);
		targetdir = (lastchar.equals("\\") || lastchar.equals("/")) ? targetdir.substring(0, targetdir.length()-1) : targetdir;
		return targetdir;
	}

	//gets the last significant filename in a path
	public static String getname(String source){
		return source.lastIndexOf("\\") != -1 ? source.substring(source.lastIndexOf("\\") + 1) : source.substring(source.lastIndexOf("/") + 1);
	}

	//formats a path for dropbox functions
	public static String dbformat(String filename){
		if(filename.contains("Waterfall")){
			filename = "/" + 
					(filename.indexOf("Waterfall") + "Waterfall/".length() < filename.length() ? 
							filename.substring(filename.indexOf("Waterfall") + "Waterfall/".length()) 
							: "") ;
		}

		if (filename.equals("")){
			filename = "/";
		}

		return filename.replace("\\", "/");
	}

	//standard download function
	public com.dropbox.core.DbxEntry.File DownloadFiles(String filename) throws DbxException, IOException{
		FileOutputStream outputStream = new FileOutputStream(filename);
		DbxEntry.File downloadedFile = null;
		try {
			downloadedFile = client.getFile(filename, null,
					outputStream);
			System.out.println("Metadata: " + downloadedFile.toString());
		} finally {
			outputStream.close();
		}
		return downloadedFile;
	}

	//deletes a specific file in Dropbox
	public void DeleteFile(String filename)throws DbxException, IOException{
		filename = dbformat(filename);
		System.out.println("deleting " + filename + " at " + getname(filename));
		FileOutputStream outputStream = new FileOutputStream(getname(filename));
		try {   
			if (new File(filename).isFile() || new File(filename).length() == 0){
				client.delete(dbformat(filename));}
			else if (new File(filename).isDirectory()){
				recursiveDelete(filename);
			} 
			else{
				client.delete(filename);
			}
		}
		finally{
			outputStream.close();
		}
	}

	//deletes the oldest files in the app folder if there are too many
	public void buffer(String dpath, Dropbox d, Integer buffer) throws NullPointerException, DbxException, IOException {
		//list the files
		ArrayList<String> files = d.ListFolders(dpath);
		try{
			//check how many there are
			if (files.size() > buffer){
				//delete if appropriate
				d.DeleteFile(files.get(0));
				//double check
				buffer(dpath, d, buffer);
			}
		}catch(IndexOutOfBoundsException e){
			e.printStackTrace();
			return;
		}
	}			


}