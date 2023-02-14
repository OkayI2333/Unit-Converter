/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numInput = document.getElementById("input");
const btn = document.getElementById("convert-btn");

const meterFeet = document.getElementById("meter-el");
const literGallon = document.getElementById("liter-el");
const kilogramPounds = document.getElementById("kilogram-el");



btn.addEventListener("click", function(){
    let input = numInput.value
    meterFeet.innerHTML = `<p> ${(input)} meters = ${(input*3.281).toFixed(4)} feet | ${input} feet = ${(input/3.281).toFixed(4)} meters </p>`
    literGallon.innerHTML = `<p> ${(input)} liters = ${(input*0.264).toFixed(4)} gallons | ${input} gallons = ${(input/0.264).toFixed(4)} liters </p>`
    kilogramPounds.innerHTML = `<p> ${(input)} kilos = ${(input*2.204).toFixed(4)} pounds | ${input} pounds = ${(input/2.204).toFixed(4)} kilos </p>`
});







