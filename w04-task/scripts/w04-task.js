/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */

/* Initialize places Lived as an empty array */
const myProfile = {
    name: "Tola Osibo",
    photo: {
        src: "images/myphoto2.png",
        alt: "Profile Picture"
    },
    favoriteFoods: [
        'Rice', 'Pan Cakes',
        'Egusi Soup',
        'Beans'
    ],
    hobbies: [
        'Troubleshooting',
        'Writing Coding',
        'Playing Chess',
        'Traveling'
    ],
    placesLived: [],
};

/* Add places to the placesLived array one at a time */
myProfile.placesLived.push({
    place: 'Moscow USSR',
    length: '1 years'
});

myProfile.placesLived.push({
    place: 'Abeokuta Nigeria',
    length: '5 years'
});

myProfile.placesLived.push({
    place: 'Lagos Nigeria',
    length: '46 years'
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = `My name is <em>${myProfile.name}</em>`;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
});