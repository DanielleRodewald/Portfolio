

function countUp() {
  var today = new Date();
  var currentTime= new Date ();
  var time = document.getElementById("cTime");
  time.innerHTML= currentTime.toLocaleTimeString();
  
};

countUp();


function submit() {
  alert("Thanks for Submitting!"); }


 