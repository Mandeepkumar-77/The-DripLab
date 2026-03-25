@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
if exist .git\rebase-merge rmdir /s /q .git\rebase-merge
if exist .git\rebase-apply rmdir /s /q .git\rebase-apply
git add .
git commit -m "feat: integrate external generated generative assets"
git branch -D tempmain
git checkout -b tempmain
git branch -D main
git checkout -b main
git push -f origin main
