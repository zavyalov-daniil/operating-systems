@ECHO OFF
ECHO Копирование и удаление файла
md DIR1\DIR2
copy TEXT1.TXT DIR1\DIR2\TEXTNEW.txt
del TEXT1.txt
echo Файл скопирован и удален
PAUSE