@echo off
set "PATH=%PATH%;C:\Program Files\Git\cmd"
git add .github/workflows/deploy.yml
git commit -m "ci: rewire actions to publish to gh-pages branch natively"
git push origin main
