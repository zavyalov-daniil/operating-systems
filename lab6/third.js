function recursion(i) {
	if(i > 1) {
		return Math.log(recursion(i-1) * i) + 9
	} else {
		return 1;
	}
}

var param = parseFloat(WScript.Arguments.Item(0));
var result = 0;
for (var n = 1; n <= param; n++) {
    result += recursion(n);
}
WScript.StdOut.Write("Результат:");
WScript.StdOut.WriteLine(result);

