@echo off
chcp 65001 >nul
echo.
echo === Instalando dependencias e inicializando git ===
echo.

cd /d "%~dp0"

echo [1/3] npm install...
call npm install
if errorlevel 1 (
  echo [ERRO] npm install falhou.
  pause
  exit /b 1
)

echo.
echo [2/3] Inicializando git...
git init
git add .
git commit -m "feat: Spotify login clone - useState e useEffect"

echo.
echo [3/3] Pronto!
echo.
echo Agora crie o repositorio no GitHub e rode:
echo   git remote add origin https://github.com/SEU-USUARIO/react-P1.git
echo   git push -u origin main
echo.
pause
