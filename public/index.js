
var name1 = document.getElementById("rname");
var phone1 = document.getElementById("rphone");
var address1 = document.getElementById("radd");
var items1 = document.getElementById("ritems");

var firebaseRname = firebase.database().ref().child("request").child("name");
var firebaseRitem = firebase.database().ref().child("request").child("requirement");
var firebaseRadd = firebase.database().ref().child("request").child("address");
var firebaseRphone = firebase.database().ref().child("request").child("phone");

firebaseRname.on('value', function(datasnapshot){
	name1.innerText = datasnapshot.val();
});

firebaseRphone.on('value', function(datasnapshot1){
	phone1.innerText = datasnapshot1.val();
});

firebaseRadd.on('value', function(datasnapshot2){
	address1.innerText = datasnapshot2.val();
});

firebaseRitem.on('value', function(datasnapshot3){
	items1.innerText = datasnapshot3.val();
});