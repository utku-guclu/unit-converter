const buttonEl = document.querySelector(".btn");
const unitBtnEl = document.querySelector(".unit-btn");
const headerEl = document.querySelector(".header");
const numberEl = document.querySelector(".show-number");
const mainEl = document.querySelector(".main");
const unitEl = document.querySelector(".header-unit");
const inputEl = document.querySelector("input");
const errorEl = document.querySelector("#error");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");

//theme
let dark_theme = false;

const themeSwitch = () => {
  dark_theme = !dark_theme;
  buttonEl.classList.toggle("btn-dark");
  headerEl.classList.toggle("header-dark");
  mainEl.classList.toggle("main-dark");
  if (!dark_theme) {
    buttonEl.innerHTML = "🍉";
  } else {
    buttonEl.innerHTML = "🍋";
  }
};
// toggle input
let isOn = false;
const toggleInput = () => {
  isOn = !isOn;
  inputEl.classList.toggle("show-input");
};

//- add an input for the user to change the number and
//  automatically recalculate values when it changes
// change automatically to numbers (display numbers to the screen)
function displayNumbers() {
  // display header section
  if (isNaN(inputEl.value)) {
    errorEl.textContent = "please enter a number";
  } else {
    unitEl.innerHTML = inputEl.value;
    // numberEl.innerHTML = inputEl.value;
    // display bottom section
    length();
    volume();
    mass();
    errorEl.textContent = null;
  }
  // initial value
  if (inputEl.value == "") {
    unitBtnEl.innerHTML = "enter";
  }
  if (isOn && inputEl.value !== "") {
    unitBtnEl.classList.add("hide-unit");
  } else {
    unitBtnEl.classList.remove("hide-unit");
  }
}

//- save number to a varible in a code.

//- when app loads do calcs and display the results
//- round the numbers to three decimal places

// initial value

function length() {
  let input = unitEl.textContent === "" ? 0 : inputEl.value;
  let meter = (input / 3.281).toFixed(3);
  let feet = (input * 3.281).toFixed(3);

  lengthEl.textContent = `${input} meters = ${feet} feet | ${input} feet = ${meter} meters`;
}

function volume() {
  let input = unitEl.textContent === "" ? 0 : inputEl.value;
  let gallon = (input / 3.785).toFixed(3);
  let liter = (input * 3.785).toFixed(3);
  volumeEl.textContent = `${input} liters = ${gallon} gallons | ${input} gallons = ${liter} liters`;
}

function mass() {
  let input = unitEl.textContent === "" ? 0 : inputEl.value;
  let kilo = (input / 2.205).toFixed(3);
  let pound = (input * 2.205).toFixed(3);
  massEl.textContent = `${input} kilos = ${pound} pounds | ${input} pounds = ${kilo} kilos`;
}
