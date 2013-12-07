// Include the Dropbox SDK.
import com.dropbox.core.*;

import java.io.*;
import java.util.Locale;

public class DROPBOX2 {
    public static void main(String[] args) throws IOException, DbxException {
        // Get your app key and secret from the Dropbox developers website.
    	final String APP_KEY = "4a09sz1p6zl7mm2";
    	final String APP_SECRET = "pk6ggm5pc4n885s";

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
        String code = new BufferedReader(new InputStreamReader(System.in)).readLine().trim();

        // This will fail if the user enters an invalid authorization code.
        DbxAuthFinish authFinish = webAuth.finish(code);

        DbxClient client = new DbxClient(config, authFinish.accessToken);

        System.out.println("Linked account: " + client.getAccountInfo().displayName);

        //actual path to file
        File inputFile = new File("C:/wamp/www/src/src/map.txt");
        FileInputStream inputStream = new FileInputStream(inputFile);
        try {
        	//within dbox path to file
            DbxEntry.File uploadedFile = client.uploadFile("/Data/map.txt",
                DbxWriteMode.add(), inputFile.length(), inputStream);
            System.out.println("Uploaded: " + uploadedFile.toString());
        } finally {
            inputStream.close();
        }

        DbxEntry.WithChildren listing = client.getMetadataWithChildren("/");
        System.out.println("Files in the root path:");
        for (DbxEntry child : listing.children) {
            System.out.println("	" + child.name + ": " + child.toString());
        }
        //whatever you want to call the file 
        FileOutputStream outputStream = new FileOutputStream("map.txt");
        try {
        	//actual path to dbox file
            DbxEntry.File downloadedFile = client.getFile("/Data/map.txt", null,
                outputStream);
            System.out.println("Metadata: " + downloadedFile.toString());
        } catch (NullPointerException e){
        }
        	finally {
            outputStream.close();
        }
        
        //what you call the file
        FileOutputStream outputStream1 = new FileOutputStream("map.txt");
        try {   
        	//actual path to file
			client.delete("/Data/map.txt");
        }finally{
        outputStream1.close();
		}
        
    }
}