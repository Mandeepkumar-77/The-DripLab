@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
git rebase --abort
git push -f origin main
