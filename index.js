import { renderLatestBlogs1,renderLatestBlogs2,renderLatestBlogs3 } from "./Blogs/Latest.js";

// This random number will decide which of the blogs should show on the page and refreshing it will also change.

let random = Math.random();
if (random >= 0 && random <= 0.3) {
    console.log(random);
    
    renderLatestBlogs1();
} else if (random > 0.3 && random <= 0.6) {
    renderLatestBlogs2();
    console.log(random);
}else {
    renderLatestBlogs3();
    console.log(random);
}
































const navbarLinks = document.getElementById('Navbar-links');

const clickToShow = document.getElementById('burgar');

clickToShow.addEventListener('click',clickToShowLinks);

function clickToShowLinks() {
    navbarLinks.style.display = 'grid';
}




const closeAllLinks1 = document.querySelector('.blog-link');

closeAllLinks1.addEventListener('click',clickToCloseNavbar1);

function clickToCloseNavbar1(){
    navbarLinks.style.display = 'none';
}

const closeAllLinks2 = document.querySelector('.aboutus-link');

closeAllLinks2.addEventListener('click',clickToCloseNavbar2);

function clickToCloseNavbar2(){
    navbarLinks.style.display = 'none';
}

const closeAllLinks3 = document.querySelector('.contact-link');

closeAllLinks3.addEventListener('click',clickToCloseNavbar3);

function clickToCloseNavbar3(){
    navbarLinks.style.display = 'none';
}


// The Start Reading Button
let startReading = document.getElementById('start-reading_btn');

startReading.addEventListener('click',clickToRead);

function clickToRead(){
    window.location.href = 'startingReading.html';
}




















// // Create Image element
// // let Image = document.createElement('img');
// // Image.src = "Images/try.png";

// // document.getElementById('image1') = Image;

// //  document.getElementById('image1').src = 'Images/try.png';
// // blog1.image();
// // document.getElementById('l-name1').innerHTML = blog1.name;


// // let date = new Date;
// // document.getElementById('l-date-time1').innerHTML = date.toDateString();