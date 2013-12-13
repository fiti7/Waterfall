import subprocess
import glob
import sys

pythonpath = "C:/Python33/python.exe"
  
#subprocess.Popen([pythonpath, './2013_12_11_20_54_55/formatchart6.py'])
  
for filepath in glob.glob("./*/*.py"):
    print(filepath)
    subprocess.Popen([pythonpath, filepath])



    