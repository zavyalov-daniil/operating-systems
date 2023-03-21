@echo off
set /p a="A = "
set /p b="B = "
if %a% equ %b% echo "a=b"
if %a% gtr %b% echo "a>b"
if %a% lss %b% echo "a<b"
pause