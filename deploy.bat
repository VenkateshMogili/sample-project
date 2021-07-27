set /P message="Please enter the Comment: "
git add . && git commit -m "%message%" && git push origin master 