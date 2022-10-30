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

# Starting the Frontend of the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the frontend directory, you can run:

### `npm install`
It installs all the packages in package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

