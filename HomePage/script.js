console.log("Hello, welcome to my website!");

console.log("Take your performance to the next level with our expertly designed Programs for Athletes. Created for those who strive for excellence, our programs focus on building strength, enhancing endurance, and maximizing flexibility while ensuring proper recovery and injury prevention. ");
console.log("Price: $" + (350+150)*1.3);

let heroTextPart1 = "Restore your health with cutting-edge digital technologies — Kazakhstan's first digital rehabilitation center";
let heroTextPart2 = "offers innovative solutions for your complete recovery.";

// here we store text for hero section
let heroText = `${heroTextPart1} ${heroTextPart2}`;
/*
and then 
put it into paragraph
*/ 
document.getElementById("hero-text").innerText = heroText;

const patientName = "Maqsat";
let patientAge = 19;

const centerName = "Qazaq Rehab";
document.getElementById("logo-name").innerText = centerName;



// task 20...
let contactForm = document.getElementById("contactForm");
let formHeader = document.getElementById("formHeader");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("name").value.trim();


    if (userName) {
        formHeader.innerText = `Thank you, ${userName}! We will get back to you soon.`.toUpperCase();; 
    }
    
    contactForm.reset();
});

