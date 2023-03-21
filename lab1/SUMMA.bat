@ECHO OFF
echo Merging and renaming files
copy A.txt + B.txt C.txt
type C.txt
PAUSE
ren A.txt FINA.txt 
ren B.txt FINB.txt