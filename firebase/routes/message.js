var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('messageList');
});

var config = {
    apiKey: "AIzaSyCTNYg3RPkwaoWS8rrzSML7FMLjMnR5qtE",
    authDomain: "kijin-jiyoung.firebaseapp.com",
    databaseURL: "https://kijin-jiyoung-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kijin-jiyoung",
    storageBucket: "kijin-jiyoung.appspot.com",
    messagingSenderId: "481739830983"
};
firebase.initializeApp(config);
      
router.get('/messageList', function(req, res, next) {
    firebase.database().ref('message').orderByKey().once('value', function(snapshot) {
        var rows = [];
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
        
            childData.brdno = childSnapshot.key;
            childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
            rows.push(childData);
        });
        res.render('message/messageList', {rows: rows});
    });
});

router.get('/messageRead', function(req, res, next) {
    firebase.database().ref('message/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        childData.brdno = snapshot.key;
        childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
        res.render('message/messageRead', {row: childData});
    });
});

router.get('/messageForm', function(req,res,next){
    if (!req.query.brdno) {
        res.render('message/messageForm', {row: ""});
        return;
    }

    firebase.database().ref('message/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        childData.brdno = snapshot.key;
        res.render('message/messageForm', {row: childData});
    });
});

router.post('/messageSave', function(req,res,next){
    var postData = req.body;
    if (!postData.brdno) {
        postData.brdno = firebase.database().ref().child('posts').push().key;
        postData.brddate = Date.now();
    } else {
        postData.brddate = Number(postData.brddate); 
    }
    firebase.database().ref('message/' + req.body.brdno).set(req.body);
    //var updates = {};
    //updates['/message/' + postData.brdno] = postData;
    //firebase.database().ref().update(updates);
    
    res.redirect('messageList');
});

router.get('/messageDelete', function(req,res,next){
    firebase.database().ref('message/' + req.query.brdno).remove();
    res.redirect('messageList');
});

module.exports = router;
