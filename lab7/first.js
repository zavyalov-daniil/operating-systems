var option = WScript.Arguments(0);

switch (option) {
	case "compare":
		var a = parseInt(WScript.StdIn.ReadLine());
		var b = parseInt(WScript.StdIn.ReadLine());
		if (a > b) {
			WScript.Echo(a + " больше, чем " + b);
		} else if (a < b) {
			WScript.Echo(a + " меньше, чем " + b);
		} else {
			WScript.Echo(a + " равно " + b);
		}
		break;
	case "info":
		WScript.Echo("Путь к WSH: " + WScript.FullName);
		WScript.Echo("Имя скрипта: " + WScript.ScriptName);
		WScript.Echo("Версия WSH: " + WScript.Version);
		break;
	case "--help":
		WScript.Echo("Выполняет одно из двух действий в зависимости от входящего параметра:");
		WScript.Echo("compare - сравнение двух чисел, введенных с клавиатуры");
		WScript.Echo("info - вывод на экран путь к исполняемому файлу сервера сценариев, имя запущенного сценария и версию WSH");
		break;
	default:
		WScript.Echo("Неизвестный параметр командной строки: " + option);
		WScript.Echo("Введите first --help для получения справки");
		break;
}
