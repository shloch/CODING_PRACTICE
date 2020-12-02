
'use strict'
var getDogURL = fetch('https://dog.ceo/api/breeds/image/random');
var getBasketBallData = fetch('https://www.balldontlie.io/api/v1/teams/28');

Promise.all([getDogURL, getBasketBallData]).then(function(results) {
   // const dogData = results[0]
   // const basketBallData = results[1]
   
   //let dogBlock = document.querySelector("#mascotDog")
   //dogBlock.style.backgroundImage = `url(${dogData.message})`;
   //console.log("successFull grabbed all links")
   console.log(results)
});