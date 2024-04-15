const idNumber = document.getElementById("numberOfTitle");
const text = document.getElementById("results");
const button = document.getElementById("button");
console.log(button);

async function adviceSlip() {
  const url = "https://api.adviceslip.com/advice";

  try {
    const response = await fetch(url);
    const data = await response.json();
    idNumber.textContent = data.slip.id;
    text.textContent = data.slip.advice;
  } catch (e) {
    console.log(e);
  }
}

button.addEventListener("click", adviceSlip);
