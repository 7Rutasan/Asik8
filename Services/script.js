let priceService1 = 700;
let priceService2 = 500;
let priceService3 = 635;
let priceService4 = 550;
let priceService5 = 900;

let tax = 1.3;

document.getElementById("price1").innerText = "Price: $" + (priceService1 * tax).toFixed();
document.getElementById("price2").innerText = "Price: $" + (priceService2 * tax).toFixed();
document.getElementById("price3").innerText = "Price: $" + (priceService3 * tax).toFixed();
document.getElementById("price4").innerText = "Price: $" + (priceService4 * tax).toFixed();
document.getElementById("price5").innerText = "Price: $" + (priceService5 * tax).toFixed();

let packageOfThree = priceService1 + priceService3 + priceService4;
console.log("Post-operative Rehabilitation + Sports Injury Recovery + Preventive Health and Wellness: $" + packageOfThree)

priceService5 = 1000;
document.getElementById("price5").innerText = "Price: $" + priceService5 * tax;


let allServices = "Post-operative Rehabilitation Chronic Illness Management Programs Sports Injury Recovery (Tailored to Sports) Preventive Health and Wellness Programs for Athletes";

console.log("Starts from index", allServices.indexOf("Chronic Illness Management Programs"));


let totalPatients = 987654321234567890123456789n; 
let revenuePerPatient = 1500000n;

let totalRevenue = totalPatients * revenuePerPatient; 

console.log(`Total patients: ${totalPatients}`);
console.log(`Revenue per patient: $${revenuePerPatient}`);
console.log(`Total Revenue: $${totalRevenue}`); 

console.log(1*Number.MAX_VALUE);



let programs = [
    "Post-operative Rehabilitation",
    "Chronic Illness Management Programs",
    "Sports Injury Recovery (Tailored to Sports)",
    "Preventive Health and Wellness",
    "Programs for Athletes"
];

document.getElementById("service1").innerText = programs[0];
document.getElementById("service2").innerText = programs[1];
document.getElementById("service3").innerText = programs[2];
document.getElementById("service4").innerText = programs[3];
document.getElementById("service5").innerText = programs[4];


