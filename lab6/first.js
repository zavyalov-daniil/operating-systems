for (var x = 0; x <= 1; x += 0.0001) {
  var tg = Math.tan(x);
  WScript.Echo("tg(" + x.toFixed(4) + ") = " + tg.toFixed(4));
}