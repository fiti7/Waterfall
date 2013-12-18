/*
 * Mail.java
 * Zips and Mails Files
 * 
 * 
 * @author Etai Klein
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 */

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;


//TODO: insert a valid username and password to use
public class Mail {
	
	private final String username = "";
	private final String password = "";
	
	private List<String> fileList = new ArrayList<String>();
	private String OUTPUT_ZIP_FILE = "C:\\Users\\knadmin\\Desktop\\Data\\Data.zip";
	private static String OUTPUT_FOLDER = "C:\\Users\\knadmin\\Desktop\\Data";
	//to check if the source file is too large
	private static final Integer TENMB = 10485760;
	private static LoggerTest logger = new LoggerTest();
	

	public Mail(String OUTPUT, LoggerTest mlogger) {
		OUTPUT_FOLDER = OUTPUT;
		logger = mlogger;
		OUTPUT_ZIP_FILE = OUTPUT + "/Data.zip";
	}

	public void zipandmail(){
		//is the sourcefile too large?
		long filesize = amITooBig(OUTPUT_FOLDER, TENMB/2);
		logger.log("size = " + String.valueOf(filesize));
		
		//if it's not empty, then zip, mail and delete it.
		if ((filesize > 1)){
			logger.log("zipping");
			zipmain();
			logger.log("mailing...");
			mailme(OUTPUT_ZIP_FILE, username);
			cleanup();
		}
		else {
			logger.log("Not mailing. size = 0. ");
		}
	}

	//prompts zipping the file
	public void zipmain(){
		if (!new File(OUTPUT_FOLDER).exists()){
			new File(OUTPUT_FOLDER).mkdir();
		}
		this.generateFileList(new File(OUTPUT_FOLDER));
		this.zipIt(OUTPUT_ZIP_FILE);

	}


	/**
	 * Zip it
	 * @param zipFile output ZIP file location
	 * 
	 * Code from Internet (TODO: find source)
	 */
	public void zipIt(String zipFile){

		byte[] buffer = new byte[1024];

		try{

			FileOutputStream fos = new FileOutputStream(zipFile);
			ZipOutputStream zos = new ZipOutputStream(fos);

			System.out.println("Output to Zip : " + zipFile);
			for(String file : this.fileList){

				logger.log("File Added : " + file);
				ZipEntry ze= new ZipEntry(file);
				zos.putNextEntry(ze);

				FileInputStream in = 
						new FileInputStream(OUTPUT_FOLDER + File.separator + file);

				int len;
				while ((len = in.read(buffer)) > 0) {
					zos.write(buffer, 0, len);
				}

				in.close();
			}

			zos.closeEntry();
			//remember close it
			zos.close();

			System.out.println("Zipped");
		}catch(IOException ex){
			ex.printStackTrace();   
		}
	}

	/**
	 * Traverse a directory and get all files,
	 * and add the file into fileList  
	 * @param node file or directory
	 * 
	 * Code from Internet (TODO: find source)
	 */
	public void generateFileList(File node){

		String name = node.getName();

		//add files only
		if(node.isFile() && !name.substring(name.lastIndexOf(".") + 1, name.length()).equals("zip") && node.getAbsoluteFile().length() > 0){
			fileList.add(generateZipEntry(node.getAbsoluteFile().toString()));
		}
		else if (name.substring(name.lastIndexOf(".") + 1, name.length()).equals("zip")){
			logger.log(name + "not added.");
			node.delete();
		}

		if(node.isDirectory()){
			String[] subNote = node.list();
			for(String filename : subNote){
				generateFileList(new File(node, filename));
			}
		}
		logger.log("filelist = " + this.fileList.toString());
	}

	/**
	 * Format the file path for zip
	 * @param file file path
	 * @return Formatted file path
	 * 
	 * Code from Internet (TODO: find source)
	 */
	private String generateZipEntry(String file){
		return file.substring(OUTPUT_FOLDER.length()+1, file.length());
	}

	public void mailme(String path, String TO) {

		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");

		Session session = Session.getInstance(props,
				new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		});

		try {

			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("etaiklein@gmail.com"));
			message.setRecipients(Message.RecipientType.TO,
					InternetAddress.parse(TO));
			message.setSubject("Keynote Data and Screenshots");
			message.setText("");

			Multipart multipart = new MimeMultipart();

			MimeBodyPart attachPart = new MimeBodyPart();

			try {
				attachPart.attachFile(path);
			} catch (IOException ex) {
				ex.printStackTrace();
			}

			multipart.addBodyPart(attachPart);

			// sets the multi-part as e-mail's content
			message.setContent(multipart);

			Transport.send(message);

			System.out.println("Done");

		} catch (MessagingException e) {
			throw new RuntimeException(e);
		}
	}

	//functon to delete a directory if it is too large
	public long amITooBig(String f, Integer s){
		long size = new File(f).length();
		if(size > s){
			System.out.println("directory is too large. deleting to make space");
			DeleteDirectory d = new DeleteDirectory(f);
			d.Delete();
		}
		return size;
	}

	public void cleanup(){
		File f = new File(OUTPUT_FOLDER + "\\Data.zip");
		f.delete();
		f = new File(OUTPUT_FOLDER);
		
	}

}