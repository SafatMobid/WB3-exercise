const months = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September",
 "October", "November", "December"];

const days= ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"]
 

 let fullDate = new Date ();
 let fullYear = fullDate.getFullYear();
 let dateNumber = fullDate.getDate();
 let monthName = months[fullDate.getMonth()];
 let dayName = days[fullDate.getDay()];
 
 
 
console.log(dateNumber + "-" + monthName + "-" + fullYear + "(" + dayName + ")")