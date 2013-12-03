// Include the Dropbox SDK.
import com.dropbox.core.*;

import java.io.*;
import java.util.ArrayList;
import java.util.Locale;

public class Dropbox {
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
		
		public void upload(String sourcepath, String targetpath) throws IOException, DbxException{
       
		File inputFile = new File(sourcepath);
        FileInputStream inputStream = new FileInputStream(inputFile);
                
            DbxEntry.File uploadedFile = client.uploadFile(targetpath,
                DbxWriteMode.add(), inputFile.length(), inputStream);
            System.out.println("Uploaded: " + uploadedFile.toString());
            inputStream.close();
		}
		
		public void ListFolders() throws DbxException{
        DbxEntry.WithChildren listing = client.getMetadataWithChildren("/");
        System.out.println("Files in the root path:");
        for (DbxEntry child : listing.children) {
            System.out.println("	" + child.name + ": " + child.toString());
        }
		}
		
		public ArrayList<String> ListFolders(String path)throws DbxException{
	        DbxEntry.WithChildren listing = client.getMetadataWithChildren(path);
	        System.out.println("Files in the root path:");
	        ArrayList<String> children = new ArrayList<String>();
	        for (DbxEntry child : listing.children) {
	            children.add(child.toString());
	        }
	        return children;
			}
		
		public void recursiveUpload(String sourcedir, String targetdir) throws DbxException, IOException{
			sourcedir = format(sourcedir);
			targetdir = format(targetdir);
			if (new File(sourcedir).isDirectory()){
				   ArrayList<String> mlist = ListFolders(sourcedir);
				   for(int i = 0; i < mlist.size(); i++){
					   recursiveUpload(mlist.get(i), targetdir + "\\" + 
				   (sourcedir.lastIndexOf("\\") != -1 ? sourcedir.substring(sourcedir.lastIndexOf("\\")) : sourcedir.substring(sourcedir.lastIndexOf("/"))) );
				   }
			}
			else {
				upload(sourcedir, targetdir);
			}
			
		}
		
		public String format(String filename){
			if(filename.substring(0, 1) != "/"){
        		filename = "/" + filename.substring(filename.indexOf("Dropbox") + "Dropbox\\".length());
        	}
			return filename;
		}
		
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
		
		
		public void DeleteFile(String filename)throws DbxException, IOException{
			format(filename);
			FileOutputStream outputStream = new FileOutputStream(filename);
	            try {   
					client.delete(filename);
	            }finally{
	            outputStream.close();
				}
		}
		
}