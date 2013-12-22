import java.io.IOException;


public class test{

private static String cmd = "C:/Windows/System32/cmd.exe";
private static String py = "C:/python33/python.exe";
private static String out =".";

public static void main(String[] args){

try{
Process p = Runtime.getRuntime().exec(cmd + " /c " + py + " " + out + "/formatchart.py", null, null);
} catch (IOException e){
e.printStackTrace();
}


}


}