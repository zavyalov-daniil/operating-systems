echo Merging and renaming files;
cat A.txt B.txt >c.txt;
cat c.txt;
read -p "Press some button to continue"
mv A.txt fina.txt;
mv B.txt finb.txt;
echo done;
