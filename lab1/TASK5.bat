@ECHO OFF
for /r %1 %%i in (*.txt) do (
echo %%i
type %%i
)