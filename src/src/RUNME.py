import subprocess
import glob


pythonpath = "C:/Python33/python.exe"
    
for filepath in glob.glob("./*/*.py"):
    print(filepath)
    subprocess.Popen([pythonpath, filepath])



    