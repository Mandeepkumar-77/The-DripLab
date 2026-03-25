@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
<<<<<<< HEAD
git rebase --abort
git push -f origin main
=======
git add .
git commit -m "chore: Automate CI/CD Pipeline via GitHub Actions"
git push origin main
>>>>>>> d4abbc1 (feat: Iteration 11 Generative AI Pipeline)
