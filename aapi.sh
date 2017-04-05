txtrst=$(tput sgr0) # Text reset
txtyel=$(tput setaf 7) # Yellow
txtgrn=$(tput setaf 6) # Green
txtred=$(tput setaf 9) # red
echo ${txtred}Copying Analytics API src files to the -dev-docs folders
echo ${txtred}Generating API docs...
cd analytics-api
echo ${txtyel}generating docs for analytics-api
apidoc -i v1/src/  -f .js -o v1/doc/ -t ../template-new
echo ${txtgrn}finished generating docs
echo ${txtgrn}Finished!
echo ${txtrst}
