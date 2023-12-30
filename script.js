// Variables
const dice = document.querySelector(".dice");
const adviceNum = document.querySelector(".adviceId");
const adviceText = document.querySelector(".adviceText");

// Run the showQuote function when the page is loaded
window.onload = showQuote;

// Eventlistener for dice button
dice.addEventListener("click", showQuote);
 // showQuote function to show random quote from API
 function showQuote(){
 fetch("https://api.adviceslip.com/advice")
 .then(response => response.json())
 .then((data) => data.slip)
 .then((data) => {
     adviceNum.textContent = data.id;
     adviceText.innerHTML = `&#8220${data.advice}&#8221`;
 })
 .catch((error) => {
     alert(`Error ${error}`);
});
}