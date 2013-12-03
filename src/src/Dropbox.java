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
       
		targetpath = dbformat(targetpath);
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
			path = dbformat(path);
	        DbxEntry.WithChildren listing = client.getMetadataWithChildren(path);
	        System.out.println("Files in the root path:");
	        ArrayList<String> children = new ArrayList<String>();
	        for (DbxEntry child : listing.children) {
	        	if (child.isFile()){
	            System.out.println("	" + child.name + ": " + child.toString());
	            children.add(child.toString());
	        	}
	        }
	        return children;
			}
		
		//sourcedir is actual path of file
		//targetdir is dropbox path "Desktop/Dbox/Waterfall/Data => /Data"
		public void recursiveUpload(String sourcedir, String targetdir) throws DbxException, IOException{
			targetdir = dbformat(targetdir);
			
			sourcedir = lastcharformat(sourcedir);
			targetdir = lastcharformat(targetdir);
			
			if (new File(sourcedir).isDirectory()){
				   File[] mlist = new File(sourcedir).listFiles();
				   System.out.println("source: " + sourcedir + ", mylist: " + mlist + ", targetdir: " + targetdir);
				   for(int i = 0; i < mlist.length; i++){
					   System.out.println("newsource: " + mlist[i].getAbsolutePath() + " oldsource: " + sourcedir + ", newtarget: " + targetdir + "/" + 
							   getname(sourcedir));
							   
					   recursiveUpload(mlist[i].getAbsolutePath(), targetdir + "/" + 
				   //add the end of the last source to keep directory structure.
				   getname(sourcedir) + "/" + getname(mlist[i].getAbsolutePath())
				   
							   );
				   }
			}
			else {
				upload(sourcedir, targetdir);
			}
			
		}
		
		//sourcedir here is the dropboxpath
		public void recursiveDelete(String sourcedir) throws DbxException, IOException{
			System.out.println(sourcedir + new File(sourcedir).isDirectory());
			if (new File(sourcedir).isDirectory()){
				   File[] mlist = new File(sourcedir).listFiles();
				   for(int i = 0; i < mlist.length; i++){
					   System.out.println("newfile: " + mlist[i].getAbsolutePath().replace("\\", "/"));
					   recursiveDelete(mlist[i].getAbsolutePath().replace("\\", "/"));
				   }
			}
			else {
				DeleteFile(sourcedir);
			}
			
		}
		
		public static String lastcharformat(String targetdir){
			//removes the last char if it's "\\" or "/"
			String lastchar = targetdir.substring(targetdir.length() - 1);
			System.out.println("lastchar: "  + lastchar);
			System.out.println("old: " + targetdir);
			targetdir = (lastchar.equals("\\") || lastchar.equals("/")) ? targetdir.substring(0, targetdir.length()-1) : targetdir;
			System.out.println("new: " + targetdir);
			return targetdir;
		}
		
		public static String getname(String source){
			return source.lastIndexOf("\\") != -1 ? source.substring(source.lastIndexOf("\\") + 1) : source.substring(source.lastIndexOf("/") + 1);
		}
		
		public static String dbformat(String filename){
			//System.out.println("input: " + filename);
			if(filename.contains("Waterfall")){
        		filename = "/" + filename.substring(filename.indexOf("Waterfall") + "Waterfall/".length());
        	}
			//System.out.println("output: " + filename);
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
			filename = dbformat(filename);
			System.out.println("deleting " + filename + " at " + getname(filename));
			FileOutputStream outputStream = new FileOutputStream(getname(filename));
	            try {   
					client.delete(filename);
	            }finally{
	            outputStream.close();
				}
		}
		
		public static void main(String[] args) {
			String mfile = "C:/Users/Etai/Desktop/Dropbox/Waterfall/";
			mfile = lastcharformat(mfile);
			
//			System.out.println(new File(mfile + "/Data").isDirectory());
			Dropbox d = new Dropbox();
			try {
				d.recursiveDelete(mfile + "/Data");
			} catch (DbxException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
}