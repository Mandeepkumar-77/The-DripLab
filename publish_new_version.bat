@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
echo Bumping Semantic Version...
call npm version patch
echo Pushing updated version to GitHub Main Branch...
git push origin main
git push origin --tags
echo Success! GitHub Actions is now building and deploying the live website on its native servers.
pause
