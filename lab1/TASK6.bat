@ECHO OFF
echo �롥�� ०��
echo 1 - ����饭�� 䠩���
echo 2 - ���������� 䠩���
echo 3 - 㤠����� 䠩���
set /p mode=
set /p f1="������ ��室�� ��⠫��"
set /p f2="������ १�ࢭ� ��⠫��"
if %mode% equ 1 (
	del /q %f2%\*
	copy %f1%\*.* %f2%
) else (
	if %mode% equ 2 (
		for /r %f1% %%i in (*.*) do (
			if NOT EXIST %f1%\%%~ni copy %%i %f2%
		)
	) 
)

REM ������� ������ 䠩�, �믮����騩 १�ࢭ�� ����஢���� ��⠫���. ��� १�ࢭ��� 
REM ��⠫��� �������� ���짮��⥫��, �᫨ ���짮��⥫� �� ������ ��� ��⠫���, � ����� 
REM ����頥��� � ⮬ �� ࠧ����, ��� ��室�� ��⠫��. ������ 䠩� ������ �।��⠢���� 
REM ���짮��⥫� ����, ��������饥 ����� ���� �� ᫥����� ०���� ࠡ���:
REM 1) ����饭�� 䠩��� (䠩�� �� ��室���� ��⠫��� ������� 䠩�� १�ࢭ���);
REM 2) ���������� 䠩��� (�᫨ � १�ࢭ�� ��⠫��� 䠩�� �� �������, � �� ���������� 
REM �� ��室����, ��稥 䠩�� �� ����������);
REM 3) 㤠����� 䠩��� (�᫨ � १�ࢭ�� ��⠫��� ������� 䠩�, ���ண� ��� � ��室���, 
REM � �� 㤠�����).
REM �।�ᬮ��� ����������� �맮�� �ࠢ�� �� ࠡ�� ����⭮�� 䠩��