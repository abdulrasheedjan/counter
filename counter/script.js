let count = 0;

function updateCounter() {
  const counterElement = document.getElementById("counter");
  const evenOddElement = document.getElementById("evenOdd");

  counterElement.textContent = count;
  evenOddElement.textContent = count % 2 === 0 ? "Even" : "Odd";
  evenOddElement.className = count % 2 === 0 ? "even" : "odd";
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function reset() {
  count = 0;
  updateCounter();
}

document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
document.getElementById("reset").addEventListener("click", reset);