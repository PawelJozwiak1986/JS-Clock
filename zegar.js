setInterval(function(){
const  date = new Date();
  updateTime(date);
  updateClock(date);
}, 1000);

const updateClock = (date) => {
  const hours = document.querySelector(".hours__hand").style;
  const minutes = document.querySelector(".minutes__hand").style;
  const seconds = document.querySelector(".seconds__hand").style;


  seconds.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minutes.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hours.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

const updateTime = (date) => {
  const timeDiv = document.querySelector(".innner__clock");
  const time = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
};