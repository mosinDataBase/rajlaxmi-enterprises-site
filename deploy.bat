@echo off
echo === Deploying RAJLAXMI ENTERPRISES site to GitHub Pages ===

git init
git add .
git commit -m "deploy: update site"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/mosinDataBase/rajlaxmi-enterprises-site.git
git push -u origin main

echo.
echo Done! GitHub Actions will publish the site to GitHub Pages automatically.
echo Visit: https://mosinDataBase.github.io/rajlaxmi-enterprises-site/
pause
