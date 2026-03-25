@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
git add .
git commit -m "chore: flush rebase"
git rebase --continue
git push origin main
