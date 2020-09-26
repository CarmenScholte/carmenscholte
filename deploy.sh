#!/bin/bash
# Run locally on command line

# Build
ng build --prod

# If outputHashing is turned on
# Remove files first
ssh carmenv0@ftp.carmenscholte.com "rm -r public_html/main.* public_html/polyfills* public_html/runtime.* public_html/styles* "

# Deploy files via ftp
# TODO get .htaccess file to be copied too
scp -r dist/* carmenv0@ftp.carmenscholte.com:public_html
