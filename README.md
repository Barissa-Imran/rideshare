Install django in your system (run the command pip install django)

Download the zip file from github and extract it or clone the repo. 

Open the extracted files in your code editor.

Open the editor`s terminal and run python manage.py runserver or open the command prompt and navigate the files location say(C:\Users\username\OneDrive\Desktop\projects\cabs>) and run python manage.py runserver

open your browser and navigate to this url -- http://127.0.0.1:8000
To view the admin module -- http://127.0.0.1:8000

username = admin
password = admin

Note : The above steps are for a windows machine. For other Operating systems, the commands are almost similar eg use python3 instead of just python

Go to settings.py and edit the following fields 
EMAIL_HOST_USER = 'email address to be used to sending reset password emails '
EMAIL_HOST_PASSWORD = 'password'
For the EMAIL_HOST_PASSWORD field go to -- support.google.com/accounts/answer/185833 -- and follow the instructions to generate the password.

Run the code and create an account  with an active email account and try to reset the password.

If you don`t receive a reset password email, -- https://myaccount.google.com/lesssecureapps
