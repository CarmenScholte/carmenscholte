#!/bin/bash
ng build --prod
git add .
git commit -m "Deploy"
git push
