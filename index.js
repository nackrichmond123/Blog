
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