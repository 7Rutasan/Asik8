let patientName = "Maqsat Oralbai";
let patientAge = 19;   
let isAdmitted = true;  

document.getElementById("patientName").innerText = "Name: " + patientName;
document.getElementById("patientAge").innerText = "Age: " + patientAge;
document.getElementById("treatment").innerText = "Treatment: " + (isAdmitted ? "completed " : " not completed ");


function changeBackground() {
    document.getElementById("but").style.backgroundColor = "#54bd27"; 
}

/*

let patient = {
    name: "Max",
    age: 52,
    services: ["Post-operative Rehabilitation", "Sports Injury Recovery", "Preventive Health and Wellnesss"]
};

document.getElementById("patientName2").innerText = "Name: " + patient.name;
document.getElementById("patientAge2").innerText = "Age: " + patient.age;
document.getElementById("treatment2").innerText = "Treatment: ";

let servicesList = document.getElementById("patientServices");

patient.services.forEach(function(service) {
    let listItem = document.createElement("li");
    listItem.innerText = service; 
    servicesList.appendChild(listItem); 
});
*/

function Patient(name, age, services) {
    this.name = name;
    this.age = age;
    this.services = services;
}

let patient2 = new Patient("Max", 52, [
    "Post-operative Rehabilitation",
    "Sports Injury Recovery",
    "Preventive Health and Wellness"
]);

document.getElementById("patientName2").innerText = "Name: " + patient2.name;
document.getElementById("patientAge2").innerText = "Age: " + patient2.age;
document.getElementById("treatment2").innerText = "Treatment: ";

let servicesList = document.getElementById("patientServices");

patient2.services.forEach(function(service) {
    let listItem = document.createElement("li");
    listItem.innerText = service; 
    servicesList.appendChild(listItem); 
});
