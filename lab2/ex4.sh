if [ -f "$1" ]; then
ls -l $1;
else
echo file not found;
fi;
read stop;

