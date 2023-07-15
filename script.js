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

// Array of love quotes
var loveQuotes = [
    "Distance means so little when someone means so much.",
    "True love doesn't know the distance.",
    "No matter how far, I carry your love with me.",
    "Love knows no distance or time.",
    "Even miles apart, our hearts are always together.",
    "Distance is just a test to see how far love can travel.",
    "In distance, we find the truest form of love.",
    "Distance cannot stop what's meant to be.",
    "With every mile, my love for you grows stronger.",
    "Love transcends all boundaries, even distance.",
    "Distance makes our love stronger and our bond unbreakable.",
    "No matter the distance, we'll always find our way back to each other.",
    "Distance may keep us apart, but love brings us closer.",
    "The distance is temporary, but our love is permanent.",
    "Distance means nothing when love means everything.",
    "I may not be there, but my heart is always with you.",
    "No matter how far apart, our souls are connected.",
    "Love knows no limits, not even distance.",
    "The miles between us only make our love stronger.",
    "Distance is just a reminder of how strong our love can be.",
    "When you're in my heart, we're never truly apart.",
    "Distance is just a small obstacle compared to our love.",
    "Our love is the bridge that spans any distance.",
    "Distance is powerless against two hearts that truly belong together.",
    "Love travels through space and time, crossing any distance.",
    "The distance may be long, but our love makes it feel short.",
    "Distance is the test of our love, and we will pass with flying colors.",
    "I love you to the moon and back, no matter the distance.",
    "Distance only makes our love burn brighter.",
    "The distance cannot diminish the love we have for each other.",
    "Our love is like the stars, always shining no matter the distance.",
    "Distance is just a temporary separation for two souls destined to be together.",
    "Love knows no boundaries, especially not distance.",
    "The miles between us are nothing compared to the love within us.",
    "No matter how far, I'll always be by your side.",
    "The distance may be great, but our love is even greater.",
    "Distance cannot erase the memories and love we share.",
    "Every mile brings us closer to our ultimate destination: love.",
    "Love crosses any distance and triumphs over any obstacle.",
    "Distance is a reminder that our love is worth every sacrifice.",
    "Our love is like a flame, burning fiercely regardless of the distance.",
    "The distance between us is a reminder of how strong our love can be.",
    "Nothing can keep us apart, not even the longest distance.",
    "Distance is just a physical separation; our hearts are always connected.",
    "Our love is like a magnet, drawing us closer no matter the distance.",
    "No matter the distance, our love will always find a way.",
    "The distance may be long, but our love is longer.",
    "Our love knows no borders, transcending any distance.",
    "Distance is just a chapter in our love story; our happy ending is certain.",
    "Our love is a force that bridges any distance.",
    "Distance is powerless against the love we have for each other.",
    "The distance may be vast, but our love is infinite.",
    "Distance gives us a reason to love harder.",
    "Love knows no borders or boundaries, only the heart.",
    "When two hearts are meant for each other, no distance is too far.",
    "Distance is a test of love, and I choose to love you even in the distance.",
    "Our love is like a melody that echoes through the miles.",
    "Distance may separate us physically, but it cannot separate our souls.",
    "In every step I take, I'm one step closer to being in your arms again.",
    "Love is the compass that guides us through any distance.",
    "Our love is like a flame that burns bright no matter the miles.",
    "Distance teaches us the patience and strength that love requires.",
    "With each passing day, I fall in love with you even more, regardless of the distance.",
    "The bond we share is unbreakable, even when we're far apart.",
    "Distance is just a reminder of how strong our love can be.",
    "Our love is not limited by the miles between us; it is boundless and everlasting.",
    "Distance makes the heart grow fonder, and my love for you grows with each passing moment.",
    "Love has no boundaries, and it cannot be contained by distance.",
    "Every night I look up at the same moon and find solace in the fact that we share it, no matter the distance.",
    "Distance makes our reunions even sweeter, filling our hearts with joy.",
    "The distance may be temporary, but our love is permanent.",
    "Every second counts when we're apart because it brings us one second closer to being together.",
    "Our love story is written in the stars, shining brightly across any distance.",
    "Love is not limited by proximity; it transcends time and space.",
    "Distance is just a reminder of how lucky we are to have found a love so strong.",
    "No matter the distance, I carry your love in my heart, always and forever.",
    "Distance can never diminish the love we share; it only fuels it.",
    "Love is the bridge that connects our hearts, no matter how far apart we may be."
  ];
  

  // Function to display a random love quote
  function displayLoveQuote() {
    var randomIndex = Math.floor(Math.random() * loveQuotes.length);
    document.getElementById("quote-container").innerHTML = loveQuotes[randomIndex];
  }

  // Display initial love quote
  displayLoveQuote();

  // Update the love quote every 60 secs
  setInterval(function() {
    displayLoveQuote();
  }, 60 * 1000); // 60 secs in milliseconds
