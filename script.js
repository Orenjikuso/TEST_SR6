const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const printBtn = document.getElementById('printBtn');
const counter = document.getElementById('slideCounter');
const nav = document.querySelector('.slide-nav');

let currentIndex = 0;

function renderDots() {
  nav.innerHTML = slides
    .map(
      (_, index) =>
        `<button class="slide-dot ${index === currentIndex ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>`
    )
    .join('');

  nav.querySelectorAll('.slide-dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      currentIndex = Number(dot.dataset.index);
      updateSlide();
    });
  });
}

function updateSlide() {
  slides.forEach((slide, index) => slide.classList.toggle('active', index === currentIndex));
  counter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === slides.length - 1 ? 'Restart' : 'Next →';
  renderDots();
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    updateSlide();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  updateSlide();
});

printBtn.addEventListener('click', () => {
  window.print();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    nextBtn.click();
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    prevBtn.click();
  }
});

updateSlide();
