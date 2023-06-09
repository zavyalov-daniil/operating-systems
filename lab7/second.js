var option = WScript.Arguments(0);

switch (option) {
  case "env":
    var env = WScript.CreateObject("WScript.Shell").Environment("System");
    var enumerator = new Enumerator(env);
    while (!enumerator.atEnd()) {
      var name = enumerator.item();
      var value = env(name);
      WScript.Echo(name + "=" + value);
      enumerator.moveNext();
    }
    break;

  case "folders":
    var shell = WScript.CreateObject("WScript.Shell");
    var specialFolders = shell.SpecialFolders;
	WScript.Echo("Desktop="+ specialFolders.item("Desktop"))
	var enumerator = new Enumerator(specialFolders);
	while (!enumerator.atEnd()) {
      var folder = enumerator.item();
      WScript.Echo(folder);
      enumerator.moveNext();
    }
    break;

  default:
    WScript.Echo("Неизвестный параметр командной строки: " + option);
    break;
}
