for f in /$1/*.txt; do
echo $f;
cat $f;
done
read stop;
