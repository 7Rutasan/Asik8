let now = new Date();

let formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

document.getElementById("currentDate").innerText = `Current Date: ${formattedDate}`;
document.getElementById("currentTime").innerText = `Current Time: ${now.toLocaleTimeString()}`;

let bookingDates = [];
for (let i = 1; i <= 5; i++) {
    let futureDate = new Date();
    futureDate.setDate(now.getDate() + i);
    bookingDates.push(futureDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }));
}

let bookingList = document.getElementById("bookingDates");
bookingDates.forEach(date => {
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerText = date;
    bookingList.appendChild(listItem);
});

let consultationID = Math.floor(Math.random() * 1000000);
document.getElementById("consultationID").innerText = `Consultation ID: #${consultationID}`;

let isServiceAvailable = Math.random() > 0.5;
let serviceAvailabilityElement = document.getElementById("serviceAvailability");
serviceAvailabilityElement.innerText = isServiceAvailable 
    ? "Service is available for booking." 
    : "Service is currently unavailable.";

serviceAvailabilityElement.classList.add(isServiceAvailable ? "text-success" : "text-danger");

let services = [
    "Post-operative Rehabilitation",
    "Chronic Illness Management Programs",
    "Sports Injury Recovery (Tailored to Sports)",
    "Preventive Health and Wellness",
    "Programs for Athletes"
];

let serviceList = document.getElementById("serviceList");
if (isServiceAvailable) {
    services.forEach(service => {
        let serviceItem = document.createElement("li");
        serviceItem.classList.add("list-group-item");
        serviceItem.innerText = service;
        serviceList.appendChild(serviceItem);
    });
}

function checkDiscount() {
    let age = document.getElementById("ageInput").value;
    let discountMessage = document.getElementById("discountMessage");

    if (age >= 65) {
        discountMessage.innerText = "You are eligible for a senior citizen discount!";
        discountMessage.classList.remove("text-info")
        discountMessage.classList.remove("text-danger")
        discountMessage.classList.add("text-success");
    } else if (age < 18) {
        discountMessage.innerText = "You are eligible for a student discount!";
        discountMessage.classList.remove("text-success")
        discountMessage.classList.remove("text-danger")
        discountMessage.classList.add("text-info");
    } else {
        discountMessage.innerText = "No discount available for your age group.";
        discountMessage.classList.remove("text-success")
        discountMessage.classList.remove("text-info")
        discountMessage.classList.add("text-danger");
    }
}


function selectTreatment() {
    let disease = document.getElementById("diseaseInput").value.toLowerCase();
    let treatmentMessage = document.getElementById("treatmentMessage");

    switch (disease) {
        case "flu":
            treatmentMessage.innerText = "Recommended treatment: Rest, fluids, and antiviral medication.";
            break;
        case "diabetes":
            treatmentMessage.innerText = "Recommended treatment: Insulin therapy and dietary management.";
            break;
        case "hypertension":
            treatmentMessage.innerText = "Recommended treatment: Blood pressure medication and lifestyle changes.";
            break;
        default:
            treatmentMessage.innerText = "Please consult a doctor for an appropriate treatment plan.";
    }
}