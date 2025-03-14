@echo off
setlocal

rem Store the root directory
set ROOT_DIR=%~dp0

rem Kill existing processes
taskkill /F /IM python.exe /T 2>nul
taskkill /F /IM node.exe /T 2>nul

rem Start backend server
echo Starting backend server...
cd "%ROOT_DIR%proxyga"
start "Backend Server" python run_server.py

rem Start frontend server
echo Starting frontend server...
cd "%ROOT_DIR%grassapp-web"
start "Frontend Server" npm run dev

echo.
echo Servers started successfully:
echo Frontend: http://localhost:3006
echo Backend: http://localhost:8001
echo.
echo Press Ctrl+C in the server windows to stop them.
echo. 