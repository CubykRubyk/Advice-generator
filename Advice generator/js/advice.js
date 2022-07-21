const adviceBtn = document.querySelector(".advice__btn");
const adviceDescr = document.querySelector(".quote");
const adviceNumber = document.querySelector(".advice__number");
const adviceURL = "https://api.adviceslip.com/advice";

async function fetchAsync(url) {
  let response = await fetch(url);
  let data = await response.json();
  if (data.slip.advice) {
    adviceDescr.textContent = data.slip.advice;
    adviceNumber.textContent = Math.floor(Math.random() * 1000);
  }
}

window.onload = fetchAsync(adviceURL);
adviceBtn.addEventListener("click", function () {
  fetchAsync(adviceURL);
});
