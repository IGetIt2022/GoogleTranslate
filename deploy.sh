#!/usr/bin/evn sh

set -r

npm run build

cd dist

git init
git add -addgit commit -m "New Deployment"
git push -f git@github.com:https://github.com/Raha7325/GoogleTranslate.git master:gh-pages

cd -