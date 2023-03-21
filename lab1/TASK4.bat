@ECHO OFF
IF EXIST %1 ( ATTRIB +S %1) ELSE ( ECHO file not found )