@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
git add .
git commit -m "resolve"
git rebase --continue
git push origin HEAD:main
