var shell = WScript.CreateObject("WScript.Shell");

var answer = shell.Popup("Создать ярлыки для запуска сценария?", 0, "Создание ярлыков", 4);

if (answer == 6) {
  var desktopPath = shell.SpecialFolders("Desktop");

  var envShortcut = shell.CreateShortcut("envShortcut.lnk");
  envShortcut.TargetPath = "second.js";
  envShortcut.Arguments = "env";
  envShortcut.WorkingDirectory = desktopPath;
  envShortcut.Save();

  var foldersShortcut = shell.CreateShortcut("foldersShortcut.lnk");
  foldersShortcut.TargetPath = "second.js";
  foldersShortcut.Arguments = "folders";
  foldersShortcut.WorkingDirectory = desktopPath;
  foldersShortcut.Save();
}