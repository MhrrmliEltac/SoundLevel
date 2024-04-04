let interval;
const counter = document.getElementById("counter");
const plus = document.querySelector(".plus");
const slider = document.querySelector(".slider");
const minus = document.querySelector(".minus");
const channgeValue = document.querySelector(".addValue");
const rangeInput = document.querySelector("#myRange");

function increaseValue() {
  let value = parseInt(counter.value);
  value++;
  counter.value = value;
}

function decreaseValue() {
  let value = parseInt(counter.value);
  value--;
  counter.value = value;
}

plus.addEventListener("mousedown", (event) => {
  let newValue = parseInt(channgeValue.innerText);
  if (newValue >= 100) {
    return;
  } else {
    newValue += 1;
    channgeValue.innerHTML = newValue + "%";
  }
  let x = parseInt(rangeInput.value) + 1;
  rangeInput.value = x; // Update the range input value
  updateGradient();
});
minus.addEventListener("mousedown", (event) => {
  let newValue = parseInt(channgeValue.innerText);
  if (newValue > 0) {
    newValue -= 1;
    channgeValue.innerHTML = newValue + "%";
  } else {
    return;
  }
  let x = parseInt(rangeInput.value) - 1;
  rangeInput.value = x; // Update the range input value
  updateGradient();
});



function updateGradient() {
  let x = rangeInput.value;
  let color = `linear-gradient(90deg, rgb(255,163,16) ${x}%, rgb(255,255,255) ${x}%)`;
  slider.style.background = color;
}
