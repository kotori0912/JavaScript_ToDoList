document.getElementById("view_todayE").innerHTML = getTodayE();

function getTodayE() {
  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth();
  var day = now.getDate();
  var you = now.getDay();
  
  var youbi = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  var month = new Array("January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December");
  
  var s = month[mon] + " " + day + ", " + year + " (" + youbi[you] + ")";
  return s;  
}


