
# Mental Imagery Mobile Application

This application is developed for IU Health Department of Surgery. It is meant for the students of the mental skill cirriculum. This app features videos, modules, student exercises, and log creation. 

## Getting Started

The instructions below will get you a copy of the project files up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
 
If you are familiar with Github Desktop, cloning the files is suggested. However, if you are not familiar with Github
1.	Click the "Clone or download" button on the top right
2.	Choose the “Download ZIP” option
3.	Save the .zip to computer and extract  
    *NOTE: Due to the size of the file, extraction will take a while
4.	Once extracted, code can be accessed in text editor of choice

### Prerequisites

This app was built using Ionic Angular and Firebase firestore. In order to deploy this project on a live system, these programs need to be installed.

Node.js and npm
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Install Cordova 

```
$ sudo npm install -g cordova
```

Install Ionic

```
$ sudo npm install -g ionic
```

### Installing and Deployment

To deploy a development enviorment 

1. Open app in code editor
2. Open command line and enter

```
ionic serve
```

This will open the application on a web browser, and will allow you to view application.

### Accessing Files

To access TS and HTML files:
1.	Open code files in a text editor of your choice (Visual Studio Code, PHP Storm, etc.) 
2.	Go to src -> app -> pages 
3.	This will show a list of all pages on the app
    * Each module has its own page
    * Log-post and uploader serve as create and display logs 
    * Login, user-account, and create-account all serve as create account or login functions

## Built With

* [Ionic](https://ionicframework.com/) - The mobile framework used
* [Angular](https://angular.io/docs) - Dependency management
* [Firestore](https://firebase.google.com/) - Live database 

## Authors

* **Hannah Hostetter** - *Initial work*
* **Andrea Trigg** - *Initial work*

## License

This project is licensed under the Department of Surgery IU Health - see the [LICENSE.md](LICENSE.md) file for details

