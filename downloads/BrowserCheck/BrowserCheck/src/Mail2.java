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

public class Mail2 {
	private List<String> fileList = new ArrayList<String>();
	private String OUTPUT_ZIP_FILE = "C:\\Users\\knadmin\\Desktop\\Data\\Data.zip";
	private String OUTPUT_FOLDER = "C:\\Users\\knadmin\\Desktop\\Data";
	private static final String EMAIL = "etaiklein@gmail.com";
	
	public void Mail2(String OUTPUT){
		OUTPUT_FOLDER = OUTPUT;
		OUTPUT_ZIP_FILE = OUTPUT + "\\Data.zip";
	}
	
	public void zipandmail(){
		System.out.println("zipping");
		zipmain();
		System.out.println("mailing...");
		mailme(OUTPUT_ZIP_FILE, EMAIL);
	}

	public void zipmain(){
		this.generateFileList(new File(OUTPUT_FOLDER));
		this.zipIt(OUTPUT_ZIP_FILE);

	}


	/**
	 * Zip it
	 * @param zipFile output ZIP file location
	 */
	public void zipIt(String zipFile){

		byte[] buffer = new byte[1024];

		try{

			FileOutputStream fos = new FileOutputStream(zipFile);
			ZipOutputStream zos = new ZipOutputStream(fos);

			System.out.println("Output to Zip : " + zipFile);

			for(String file : this.fileList){

				System.out.println("File Added : " + file);
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

			System.out.println("Done");
		}catch(IOException ex){
			ex.printStackTrace();   
		}
	}

	/**
	 * Traverse a directory and get all files,
	 * and add the file into fileList  
	 * @param node file or directory
	 */
	public void generateFileList(File node){
		
		//add file only
		if(node.isFile()){
			fileList.add(generateZipEntry(node.getAbsoluteFile().toString()));
		}

		if(node.isDirectory()){
			String[] subNote = node.list();
			for(String filename : subNote){
				generateFileList(new File(node, filename));
			}
		}

	}

	/**
	 * Format the file path for zip
	 * @param file file path
	 * @return Formatted file path
	 */
	private String generateZipEntry(String file){
		return file.substring(OUTPUT_FOLDER.length()+1, file.length());
	}

public void mailme(String path, String TO) {

	final String username = "etaiklein@gmail.com";
	final String password = "Supercow1";

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
}