@echo off
echo ========================================
echo   Jetwing Travels - Deploy to Vercel
echo ========================================
echo.
echo Step 1: Installing Vercel CLI...
npm i -g vercel
echo.
echo Step 2: Deploying...
vercel --yes --prod
echo.
echo Done! Your website will be live shortly.
pause
