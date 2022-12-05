var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var dateFormat = require('dateformat');

router.get('/', function(req, res, next) {
    res.redirect('boardList');
});

var firebaseConfig = {
  apiKey: "AIzaSyCTNYg3RPkwaoWS8rrzSML7FMLjMnR5qtE",
  authDomain: "kijin-jiyoung.firebaseapp.com",
  databaseURL: "https://kijin-jiyoung-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kijin-jiyoung",
  storageBucket: "kijin-jiyoung.appspot.com",
  messagingSenderId: "481739830983",
  appId: "1:481739830983:web:8e294e391fad90dd49b0e2",
  measurementId: "G-QHT1S00PQJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
      
router.get('/boardList', function(req, res, next) {
    firebase.database().ref('board').orderByKey().once('value', function(snapshot) {
        var rows = [];
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
        
            childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
            rows.push(childData);
        });
        res.render('message/boardList', {rows: rows});
    });
});

router.get('/boardRead', function(req, res, next) {
    firebase.database().ref('board/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        childData.brdno = snapshot.key;
        childData.brddate = dateFormat(childData.brddate, "yyyy-mm-dd");
        res.render('message/boardRead', {row: childData});
    });
});

router.get('/boardForm', function(req,res,next){
    if (!req.query.brdno) {
        res.render('message/boardForm', {row: ""});
        return;
    }

    firebase.database().ref('board/'+req.query.brdno).once('value', function(snapshot) {
        var childData = snapshot.val();
        
        childData.brdno = snapshot.key;
        res.render('message/boardForm', {row: childData});
    });
});

router.post('/boardSave', function(req,res,next){
    var postData = req.body;
    if (!postData.brdno) {
        postData.brdno = firebase.database().ref().child('posts').push().key;
        postData.brddate = Date.now();
    } else {
        postData.brddate = Number(postData.brddate); 
    }
    firebase.database().ref('board/' + req.body.brdno).set(req.body);
    //var updates = {};
    //updates['/board/' + postData.brdno] = postData;
    //firebase.database().ref().update(updates);
    
    res.redirect('boardList');
});

router.get('/boardDelete', function(req,res,next){
    firebase.database().ref('board/' + req.query.brdno).remove();
    res.redirect('boardList');
});

module.exports = router;
