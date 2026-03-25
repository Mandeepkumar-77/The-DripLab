@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
git commit --allow-empty -m "chore: kickstart GitHub Actions deployment pipeline"
git push origin main
