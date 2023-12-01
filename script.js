const firebaseConfig = {
  apiKey: "AIzaSyA3txReZRqcVRSVK8uUnv5JYkc7EhFYxKU",
  authDomain: "iotcw-8c667.firebaseapp.com",
  databaseURL: "https://iotcw-8c667-default-rtdb.firebaseio.com",
  projectId: "iotcw-8c667",
  storageBucket: "iotcw-8c667.appspot.com",
  messagingSenderId: "961473836402",
  appId: "1:961473836402:web:8e681eee0ca229aa7f19eb",
  measurementId: "G-6GR2N2KT63"
};

  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  var dataRef1 = database.ref('Park/Slot1');
	var dataRef2 = database.ref('Park/Slot2');
  var dataRef3 = database.ref('Park/Slot3');
	var dataRef4 = database.ref('Park/Slot4');
  var dataRef5 = database.ref('CarDetected');
	  

  //fetch the data
	  dataRef1.on('value', function(getdata1){
	  	var slot1 = getdata1.val();
      var car1 = document.getElementById('car1');
      if (slot1 == "Available"){
        car1.style.opacity = 0;
      }
      else{car1.style.opacity = 1;}
	  })
    dataRef2.on('value', function(getdata2){
	  	var slot2 = getdata2.val();
      var car2 = document.getElementById('car2');
      if (slot2 == "Available"){
        car2.style.opacity = 0;
      }
      else{car2.style.opacity = 1;}
	  })
    dataRef3.on('value', function(getdata3){
	  	var slot3 = getdata3.val();
      var car3 = document.getElementById('car3');
      if (slot3 == "Available"){
        car3.style.opacity = 0;
      }
      else{car3.style.opacity = 1;}
	  })
    dataRef4.on('value', function(getdata4){
	  	var slot4 = getdata4.val();
      var car4 = document.getElementById('car4');
      if (slot4 == "Available"){
        car4.style.opacity = 0;
      }
      else{car4.style.opacity = 1;}
	  })

    var btnIndex = 0;

    dataRef5.on('value', function(getdata5){
      var CarDetected = getdata5.val();
      var barrierBtn = document.getElementById('barrier-btn');
      if (CarDetected == 1){
        barrierBtn.style.backgroundColor = '#eb4034';
        barrierBtn.disabled = false;
      }
      else{
        barrierBtn.style.backgroundColor = '#99817f';
        barrierBtn.disabled = true;
        database.ref('Barrier').set(0);
      }
    })

    function press() {
      var barrierBtn = document.getElementById('barrier-btn');
      database.ref('Barrier').set(1);
      barrierBtn.style.backgroundColor = '#d4655d';
      barrierBtn.disabled = true;
    }


  