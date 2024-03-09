/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Adetokunbo 'Tola Osibo";
const currentYear = new Date().getFullYear();
const profilePicture = "images/myphoto2.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.textContent = fullName;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. He is currently a student of BYUI`);



/* Step 5 - Array */
let favoriteFood = ["Beans", "Rice", "Cereals", "Chicken", "Ukodo", "Amala", "Pounded-Yam"];
document.getElementById('food').innerHTML = favoriteFood;





