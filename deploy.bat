@echo off
echo ===================================================
echo   DEPLOIEMENT DU PORTFOLIO SUR SURGE.SH (GRATUIT)
echo ===================================================
echo.
echo 1. Si surge n'est pas installe, npx va le telecharger (dis oui).
echo 2. Si c'est la premiere fois, entre un email et un mot de passe pour creer un compte.
echo 3. Le domaine pre-configure est: sarahjenselme-portfolio.surge.sh
echo.
echo Lancement...
call npx surge ./
echo.
echo ===================================================
echo   DEPLOIEMENT TERMINE !
echo   Note l'URL qui s'affiche ci-dessus.
echo ===================================================
pause
