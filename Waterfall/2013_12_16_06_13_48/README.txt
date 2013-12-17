Readme.txt

1. High Level Overview

a. On the Virtual Machine
The program Check.java checks to see when the Agent TxnPlaybackEngine.exe is running.
When it is running, it tells vlc to take screencaps.
These are renamed to the elapsed time upon creation*

Meanwhile, CopyFiles.java copies any files created by the Keynote Agent into our output folder.

When Check finishes capturing, more programs are copied to the output folder and from there mailed, sent to Dropbox or deleted.

*VLC's internal timestamp doesn't seem to work

b. User Interaction

The client now has received the data and screenshots, either by mail or Dropbox. From here, a user can run the RUNME.py file aka formatchart4.py
This will process the .dat file created by the agent. This data is formatted into a key and a number of output files; these will turn into the waterfall.

The python file will ask the user's default browser* to open the linedbase.php file. 
This file displays a scrolling filmstrip of screencaps above a waterfall of the corresponding transaction.

*currently this will only work for chrome

2. In Detail 
I. Data Capture

a. image capture

The checker waits for the process (tnxplaybackengine) to begin running by checking the system's tasklist.
When it notices the process is running, it triggers a new process, vlc. VLC renders the screen display as a stream. Then captures frames at a x fps. 

When the checker notices that the process stops, it terminates vlc and notifies the controller program to process the data

Since vlc's timestamp ($T) doesn't work, Renamer.java renames the files by elapsed time as the files enter the output folder. 

b. agent data

The agent deletes it's data files periodically so we need to copy them first.
Copyfiles is called as a separate thread, that copies files created by the Keynote Agent into our output folder every second. 
Ultimately we're only interested in the .dat files. Transdata.dat appears to contain more information than the others. 

II. Data Transfer

a. Existing
Once all the data is assembled into the relevant output folder it can be transferred out of the remote system.

There are currently two ways of doing this.

The first is by email. Mail.java logs into my gmail account, zips the relevant files and sends them back to myself. 
To change this to a different email account is a simple matter of changing the username and password static variables in Mail.java

The second way is through Dropbox. The Dropbox method requires manually logging into dropbox on the first run of the program on the VM. 
Running the program will open up a webbrowser prompting you to input a key into the console.
After that, the Dropbox.java provides functions to add and delete files directly to dropbox. 

After the files are mailed or uploaded, the Controller will call DeleteFiles.java to recursively delete all files left in the source and output folders while keeping the directory structure intact.

b. Future Plans

A further options to make access easier is to create a buffer of full data packages on the VM. 
When a user wants to access one, then they can access it through their browser at [VM IP ADDRESS]\[phpfile]
Which will prompt the user to select [test, vodafone, walmart] to display. 

I have prepared automate.java which will open and run any program (read: wamp) on the host machine if it is not already running. 

III. Waterfall

FormatChart.py / RUNME.py processes the data using the map.txt file to interpret the .dat file and extract the parts useful for the waterfall
It writes those parts into new javascript files (one for each transaction). And a key containing the paths to the files, and the transaction's start and end times. 

The python file will ask the user's default browser (currently only chrome works) to open the linedbase.php file.
This will only work if WAMP is running and the php file is located in the www folder somewhere. 

The php file accesses the file containing the images through the URl - 'http://localhost/Waterfall/linedbase3.php?link=./ScreenCaps/*.jpg will look for all .jpg images in the folder ScreenCaps

The php file first chooses which images to use. First it orders them by filename (elapsed time). 
Currently it's set to use only the 10 screencaps closest to increments of 10% the elapsed time of the last image. 
These are displayed in a horizontally scrolling image container. 

Using the percentage scrolled and the start and endtimes for the transactions defined in the key.js file, 
the red marker is positioned and correct transaction's waterfall is displayed. The waterfalls are rendered using highcharts. 
