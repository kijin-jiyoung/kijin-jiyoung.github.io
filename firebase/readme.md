## simple message(CRUD) examples for firebase and Node.js(express) ##

This example is web boards focusing on data input / output for easy understanding of firebase (database).

Although the documentation provided with Firebase is well documented, it is difficult to understand how to use it because it is described as a function-oriented one.

So, this example is designed to make it easy to learn how to use Firebase through three simple web message codes (node.js + express):

1. message based on Realtime Database
2. message based on Cloud Firestore (beta)
3. authentication

### Install & Run ###
- source down from github
- npm install
- Edit app.js: Since the three examples do not run at the same time, you should modify the following code in app.js.
    
    app.use('/message', require('./routes/message'));
    

- Edit message.js: set config for [firebase](https://firebase.google.com/docs/web/setup?authuser=0)
    
- npm start    
- http://localhost:3000/message/messageList



