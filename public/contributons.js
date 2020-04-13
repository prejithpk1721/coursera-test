
var name1 = document.getElementById("cname");
var phone1 = document.getElementById("cphone");
var address1 = document.getElementById("cadd");
var fname = document.getElementById("cfname");
var date = document.getElementById("cdate");
var time = document.getElementById("ctime");

var firebaseCname = firebase.database().ref().child("contributions").child("name");
var firebaseCadd = firebase.database().ref().child("contributions").child("address");
var firebaseCphone = firebase.database().ref().child("contributions").child("phone");
var firebaseCfname = firebase.database().ref().child("contributions").child("food");
var firebaseCDate = firebase.database().ref().child("contributions").child("date");
var firebaseCTime = firebase.database().ref().child("contributions").child("time");


firebaseCname.on('value', function(datasnapshot){
	name1.innerText = datasnapshot.val();
});

firebaseCphone.on('value', function(datasnapshot1){
	phone1.innerText = datasnapshot1.val();
});

firebaseCadd.on('value', function(datasnapshot2){
	address1.innerText = datasnapshot2.val();
});

firebaseCfname.on('value', function(datasnapshot3){
	fname.innerText = datasnapshot3.val();
});


firebaseCDate.on('value', function(datasnapshot5){
	date.innerText = datasnapshot5.val();
});

firebaseCTime.on('value', function(datasnapshot6){
	time.innerText = datasnapshot6.val();
});