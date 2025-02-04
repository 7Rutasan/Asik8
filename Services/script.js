let priceService1 = 700;
let priceService2 = 500;
let priceService3 = 635;
let priceService4 = 550;
let priceService5 = 900;

let tax = 1.3;

document.getElementById("price1").innerText = "Price: $" + priceService1 * tax;
document.getElementById("price2").innerText = "Price: $" + priceService2 * tax;
document.getElementById("price3").innerText = "Price: $" + priceService3 * tax;
document.getElementById("price4").innerText = "Price: $" + priceService4 * tax;
document.getElementById("price5").innerText = "Price: $" + priceService5 * tax;

let packageOfThree = priceService1 + priceService3 + priceService4;
console.log("Post-operative Rehabilitation + Sports Injury Recovery + Preventive Health and Wellness: $" + packageOfThree)

priceService5 = 1000;
document.getElementById("price5").innerText = "Price: $" + priceService5 * tax;