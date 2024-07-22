let currentIndex = 0;


function showSlide(index) {
    
  const slides = document.querySelectorAll('.carousel-images img');
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
  
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Mostrar la primera imagen al cargar la página
setInterval(nextSlide,2000);


showSlide(currentIndex)
