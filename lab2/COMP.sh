read p1;
read p2;
if [ $p1 -gt $p2 ]; then
    echo first is greater than second;
elif [ $p1 -lt $p2 ]; then
    echo first is less then second;
else
    echo first is equal to second;
fi;
read stop;
