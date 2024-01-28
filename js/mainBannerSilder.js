let currentIndex = 0;
const slider = document.querySelector('#mainBanner #mainSlider');
const slides = document.querySelectorAll('#mainBanner img');
const totalSlides = slides.length;

// Create indicators
const indicatorsContainer = document.getElementById('indicators');
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.indicator');

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
  updateIndicators();
}

function updateSlider() {
  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

function updateIndicators() {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === currentIndex);
  });
}

// Add event listeners to indicators
indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    currentIndex = i;
    updateSlider();
    updateIndicators();
  });
});

// Set interval for automatic sliding
setInterval(nextSlide, 3000);

// Initial update of indicators
updateIndicators();
