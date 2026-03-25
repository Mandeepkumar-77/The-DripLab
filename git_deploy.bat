@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
git branch temp
git checkout temp
git branch -D main
git checkout -b main
git add .
git commit -m "feat: complete visual pipeline integration"
git push -f origin main
