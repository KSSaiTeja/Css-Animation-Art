const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 2, roundness: 3 },
];

let prev = 0;

setInterval(() => {
  const index = rand(0, combinations.length - 1),
    combination = combinations[index];

  wrapper.dataset.configuration = rand(1, 3);
  wrapper.dataset.roundness = rand(1, 4);
}, 3000);

const toggleButton = document.getElementById("theme-toggle");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});

console.log(2 + 2); 
