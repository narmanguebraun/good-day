function weekDay() {
  const date = new Date();
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const dayOfTheWeek = weekday[date.getDay()];
  return dayOfTheWeek;
}
function timeDay() {
  const date = new Date();
  const time = date.toLocaleTimeString("en-GB");
  if (time > "06:00:00" && time < "12:00:00") {return "morning ";} 
  else if (time >= "12:00:00" && time < "18:00:00") {return "afternoon ";} 
  else if (time >= "18:00:00" && time < "22:00:00") {return "evening ";} 
  else if (time >= "22:00:00" && time < "23:59:59") {return "night ";} 
  else {return "";}
}
document.getElementById('weekday').innerHTML = weekDay();
document.getElementById('timeday').innerHTML = timeDay();
