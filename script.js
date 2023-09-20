

//this is for smooth scrolling across the section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  
 


//this is to redirect to the location html page
  function redirectToExternalPageLocation() {
    window.location.href = 'about_us/index.html';
}



//this is for smooth scrolling
const images = [
  'img/healthy-vegetable-salad-fish-top-view-white-background-flat-lay.png',
  'img/photo-1546069901-ba9599a7e63c-removebg-preview-1.png',
];

const imageElement = document.getElementById('healthy-veg');
let currentIndex = 0;


imageElement.style.opacity = 0;

setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    imageElement.style.opacity = 1;
}, 1000); 


setInterval(changeImage, 3000); 


//this is to redierct to reserving webpage
function redirectToExternalPageReservation() {
  window.location.href = 'Reserving_index_file/index.html';
}
