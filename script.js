// Set the date we're counting down to
var countDownDate = new Date("August 15, 2023 09:30:00 EST").getTime();

// Update the countdown every 1 second
var countdownTimer = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =  
  days + " Days : " + 
  hours + " Hours : " + 
  minutes + " Minutes : " + 
  seconds + " secs " + 
  "<br /> till Muskie & Shuboo meet :) <br/> Iloveyou babygirl <3";

  // Change the background color to different shades of pink every second
  var red = 255;
  var green = 170 + Math.floor(Math.random() * 40);
  var blue = 180 + Math.floor(Math.random() * 40);
  document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Countdown Finished";
  }
}, 1000);
