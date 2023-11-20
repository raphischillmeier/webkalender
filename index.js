var month = ["Januar", "Februar", "März", "April", "Mai", "Juni", "juli", "August", "September", "Oktober", "November", "Dezember"];
var monthBackground = [
  "https://th.bing.com/th/id/OIP.FiLC0XoeOvit8_dvzd_8CAHaEo?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/R.a2d4fc9e2cb6055debdd8be380380f1a?rik=SHQXJrRjHVRfxQ&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.jPa09BmVd2YrUaUtmeuWkAHaE7?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIP.a0ctFBTYb58X2pc0eJB_1QHaFj?pid=ImgDet&rs=1"
]


const date = new Date();
const hour = date.getHours();
const day = date.getDate();
const currentDay = date.getDay();

function zeitStrahl(){
  hour.toString();
  if(currentDay == 1){
    var daydate = "mo"
  }
  if(currentDay == 2){
    var daydate = "di"
  }
  if(currentDay == 3){
    var daydate = "mi"
  }
  if(currentDay == 4){
    var daydate = "do"
  }
  if(currentDay == 5){
    var daydate = "fr"
  }
  if(currentDay == 6){
    var daydate = "sa"
  }
  if(currentDay == 7){
    var daydate = "so"
  }

  var element = document.getElementById(daydate + hour);
  element.style.backgroundColor = "grey";
}


zeitStrahl();


function setDate(){  
  let currentMonth = month[date.getMonth()];
  document.getElementById("monthCur").innerHTML = currentMonth;

  if(currentMonth == "Dezmber" || currentMonth == "Januar" || currentMonth == "Februar"){
    document.getElementById("header").style.backgroundImage = "url(https://th.bing.com/th/id/OIP.FiLC0XoeOvit8_dvzd_8CAHaEo?pid=ImgDet&rs=1)";
  }
  if(currentMonth == "März" || currentMonth == "April" || currentMonth == "Mai"){
    document.getElementById("header").style.backgroundImage = "url(https://th.bing.com/th/id/R.a2d4fc9e2cb6055debdd8be380380f1a?rik=SHQXJrRjHVRfxQ&pid=ImgRaw&r=0)";
  }
  if(currentMonth == "Juni" || currentMonth == "Juli" || currentMonth == "August"){
    document.getElementById("header").style.backgroundImage = "url(https://th.bing.com/th/id/OIP.jPa09BmVd2YrUaUtmeuWkAHaE7?pid=ImgDet&rs=1)";
  }
  if(currentMonth == "September" || currentMonth == "Oktober" || currentMonth == "November"){
    document.getElementById("header").style.backgroundImage = "url(https://th.bing.com/th/id/OIP.a0ctFBTYb58X2pc0eJB_1QHaFj?pid=ImgDet&rs=1)";
    
  }
}


function setWeekdays(){

  let Mo = document.getElementById("Mo");
  let Di = document.getElementById("Di");
  let Mi = document.getElementById("Mi");
  let Do = document.getElementById("Do");
  let Fr = document.getElementById("Fr");
  let Sa = document.getElementById("Sa");
  let So = document.getElementById("So");

  if (currentDay == 0){
    So.innerHTML = "So: " + day
    Mo.innerHTML = "Mo: " + (day - 6)
    Di.innerHTML = "Di: " + (day - 5)
    Mi.innerHTML = "Mi: " + (day - 4)
    Do.innerHTML = "Do: " + (day - 3)
    Fr.innerHTML = "Fr: " + (day - 2)
    Sa.innerHTML = "Sa: " + (day - 1)
  }
  if (currentDay == 1){
    Mo.innerHTML = "Mo: " + day
    Di.innerHTML = "Di: " + (day + 1)
    Mi.innerHTML = "Mi: " + (day + 2)
    Do.innerHTML = "Do: " + (day + 3)
    Fr.innerHTML = "Fr: " + (day + 4)
    Sa.innerHTML = "Sa: " + (day + 5)
    So.innerHTML = "So: " + (day + 6)
  }
  if (currentDay == 2){
    Di.innerHTML = "Di: " + day
    Mi.innerHTML = "Mi: " + (day + 1)
    Do.innerHTML = "Do: " + (day + 2)
    Fr.innerHTML = "Fr: " + (day + 3)
    Sa.innerHTML = "Sa: " + (day + 4)
    So.innerHTML = "So: " + (day + 5)
    Mo.innerHTML = "Mo: " + (day - 1) 
  }
  if (currentDay == 3){
    Mi.innerHTML = "Mi: " + day
    Do.innerHTML = "Do: " + (day + 1)
    Fr.innerHTML = "Fr: " + (day + 2)
    Sa.innerHTML = "Sa: " + (day + 3)
    So.innerHTML = "So: " + (day + 4)
    Mo.innerHTML = "Mo: " + (day - 2)
    Di.innerHTML = "Di: " + (day - 1)
  }
  if (currentDay == 4){
    Do.innerHTML = "Do: " + day
    Fr.innerHTML = "Fr: " + (day + 1)
    Sa.innerHTML = "Sa: " + (day + 2)
    So.innerHTML = "So: " + (day + 3)
    Mo.innerHTML = "Mo: " + (day - 3)
    Di.innerHTML = "Di: " + (day - 2)
    Mi.innerHTML = "Mi: " + (day - 1)
  }
  if (currentDay == 5){
    Fr.innerHTML = "Fr: " + day
    Sa.innerHTML = "Sa: " + (day + 1)
    So.innerHTML = "So: " + (day + 2)
    Mo.innerHTML = "Mo: " + (day - 4)
    Di.innerHTML = "Di: " + (day - 3)
    Mi.innerHTML = "Mi: " + (day - 2)
    Do.innerHTML = "Do: " + (day - 1)
  }
  if (currentDay == 6){
    Sa.innerHTML = "Sa: " + day
    So.innerHTML = "So: " + (day + 1)
    Mo.innerHTML = "Mo: " + (day - 5)
    Di.innerHTML = "Di: " + (day - 4)
    Mi.innerHTML = "Mi: " + (day - 3)
    Do.innerHTML = "Do: " + (day - 2)
    Fr.innerHTML = "Fr: " + (day - 1)
  }
}

setWeekdays();

setDate();

function calculatePositionInPixel(hour) {
  // Annahme: 1 Stunde entspricht 60 Pixel
  return parseInt(hour) * 10.5;
}

function setTermin() {
  var art = document.getElementById("termin").value;
  var Name = document.getElementById("name").value;
  var startDay = document.getElementById("beginday").value;
  var startHr = document.getElementById("beginhour").value;
  var endDay = document.getElementById("endday").value;
  var endHr = document.getElementById("endhour").value;
  var color = document.getElementById("color").value;

  if (color == "Rot"){
    color = "red";
  }
  if (color == "Grün"){
    color = "green";
  }
  if (color == "Gelb"){
    color = "yellow";
  }
  if (color == "Blau"){
    color = "blue"
  }

  if (art === "Termin") {
    var termin = new Termin(startHr, endHr, startDay, endDay, Name, color);
    termin.create(startHr);
  } else if (art === "Aufgabe") {
    var aufgabe = new Aufgabe(startHr, endHr, startDay, endDay, Name, color);
    aufgabe.create();
  } else if (art === "Geburtstag") {
    var bday = new Geburtstag(startDay, Name, color);
    bday.create();
  }
}

// Modifizierte Klasse für Termine, Aufgaben und Geburtstage
class Termin {
  constructor(startTime, endTime, startDay, endDay, name, color) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.startDay = startDay;
    this.endDay = endDay;
    this.name = name;
    this.color = color;
  }

  create() {
    // Erstellen des HTML-Elements für den Termin
    var element = document.createElement("div");


    if (this.startDay == "Montag" || this.startDay == "montag"){
      this.startDay = 4.5
    }
    if (this.startDay == "Dienstag" || this.startDay == "dienstag"){
      this.startDay = 17.5
    }
    if (this.startDay == "Mittwoch" || this.startDay == "mittwoch"){
      this.startDay = 31
    }
    if (this.startDay == "Donnerstag" || this.startDay == "donnerstag"){
      this.startDay = 44
    }
    if (this.startDay == "Freitag" || this.startDay == "freitag"){
      this.startDay = 56.5
    }
    if (this.startDay == "Samstag" || this.startDay == "samstag"){
      this.startDay = 70
    }
    if (this.startDay == "Sonntag" || this.startDay == "sonntag"){
      this.startDay = 83
    }

    // Berechnung der Position in Pixel und Setzen der CSS-Stile
    var positionElementStart = calculatePositionInPixel(this.startTime);
    var positionElementEnd = calculatePositionInPixel(this.endTime);
    var positionElementLeft = this.startDay


    element.style.top = positionElementStart + "%";
    element.style.height = (positionElementEnd - positionElementStart) + "%";
    element.style.marginLeft = positionElementLeft + "%";
    element.style.width = "12%";
    element.style.backgroundColor = this.color;
    element.style.position = "absolute";
    element.innerHTML = this.name; // Füge den Namen hinzu

    // Hinzufügen des Elements zum DOM
    document.getElementById("center").appendChild(element);
    element.style.zIndex = "100"
    return element;

    //element.style.zIndex = "5";
  }
}

// Klasse für Aufgaben
class Aufgabe {
  constructor(startTime, endTime, startDay, endDay, name, color) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.startDay = startDay;
    this.endDay = endDay;
    this.name = name;
    this.color = color;
  }

  create() {
    // Erstellen des HTML-Elements für die Aufgabe
    var element = document.createElement("div");


    if (this.startDay == "Montag" || this.startDay == "montag"){
      this.startDay = 4.5
    }
    if (this.startDay == "Dienstag" || this.startDay == "dienstag"){
      this.startDay = 17.5
    }
    if (this.startDay == "Mittwoch" || this.startDay == "mittwoch"){
      this.startDay = 31
    }
    if (this.startDay == "Donnerstag" || this.startDay == "donnerstag"){
      this.startDay = 44
    }
    if (this.startDay == "Freitag" || this.startDay == "freitag"){
      this.startDay = 58
    }
    if (this.startDay == "Samstag" || this.startDay == "samstag"){
      this.startDay = 70
    }
    if (this.startDay == "Sonntag" || this.startDay == "sonntag"){
      this.startDay = 83
    }
    

    // Berechnung der Position in Pixel und Setzen der CSS-Stile
    var positionElementStart = calculatePositionInPixel(this.startTime);
    var positionElementEnd = calculatePositionInPixel(this.endTime);
    var positionElementLeft = this.startDay 

    //var positionElementLeft = calculatePositionInPixel(this.startDay)

    element.style.top = positionElementStart + "%";
    element.style.height = (positionElementEnd - positionElementStart) + "px";
    element.style.Left = positionElementLeft + "%";

   // element.style.marginLeft = positionElementLeft + "px";
    element.style.width = "12%"
    element.style.backgroundColor =  "green" //this.color;
    element.style.position = "absolute";
    element.innerHTML = this.name; // Füge den Namen hinzu

    // Hinzufügen des Elements zum DOM
    document.getElementById("center").appendChild(element);
    element.style.zIndex = "100"
    return element;
  }
}

// Modifizierte Klasse für Geburtstage
class Geburtstag {
  constructor(day, name, color) {
    this.day = day;
    this.name = name;
    this.color = color;
  }

  create() {
    // Erstellen des HTML-Elements für den Geburtstag
    var element = document.createElement("div");

    if (this.startDay == "Montag" || this.startDay == "montag"){
      this.startDay = 4.5
    }
    if (this.startDay == "Dienstag" || this.startDay == "dienstag"){
      this.startDay = 17.5
    }
    if (this.startDay == "Mittwoch" || this.startDay == "mittwoch"){
      this.startDay = 31
    }
    if (this.startDay == "Donnerstag" || this.startDay == "donnerstag"){
      this.startDay = 44
    }
    if (this.startDay == "Freitag" || this.startDay == "freitag"){
      this.startDay = 56.5
    }
    if (this.startDay == "Samstag" || this.startDay == "samstag"){
      this.startDay = 70
    }
    if (this.startDay == "Sonntag" || this.startDay == "sonntag"){
      this.startDay = 83
    }

    // Setzen der CSS-Stile
    var positionElement = calculatePositionInPixel(this.day);

    element.style.top = positionElement + "px";
    element.style.height = "20px"; // Höhe für Geburtstage festlegen
    element.style.width = "12%"
    element.style.backgroundColor = this.color;
    element.style.position = "absolute";
    element.innerHTML = this.name; // Füge den Namen hinzu

    // Hinzufügen des Elements zum DOM
    document.getElementById("center").appendChild(element);

    element.style.zIndex = "100"
    return

  }
}





