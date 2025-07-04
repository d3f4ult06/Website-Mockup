document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transition = 'transform 0.3s ease';
      link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });

  const buttons = document.querySelectorAll('.btn-success, .btn-outline-success');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
      button.style.boxShadow = '0 8px 15px rgba(0, 112, 74, 0.6)';
      button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.boxShadow = '0 4px 8px rgba(0, 112, 74, 0.3)';
      button.style.transform = 'scale(1)';
    });
  });

  const cards = document.querySelectorAll('.card');
  const observerOptions = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
  });

  const storeLocatorForm = document.getElementById('store-locator-form');
  const locationInput = document.getElementById('location-input');
  const storeResults = document.getElementById('store-results');

  const stores = [
    { name: 'Starbucks Greenbelt 3', address: 'Ayala Center, Makati City' },
    { name: 'Starbucks Bonifacio High Street', address: 'BGC, Taguig City' },
    { name: 'Starbucks SM Mall of Asia', address: 'Pasay City' },
    { name: 'Starbucks Glorietta 4', address: 'Ayala Center, Makati City' },
    { name: 'Starbucks Trinoma', address: 'Quezon City' }
  ];

  storeLocatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = locationInput.value.trim().toLowerCase();
    if (!query) {
      storeResults.textContent = 'Please enter a location to search.';
      return;
    }
    const filteredStores = stores.filter(store =>
      store.name.toLowerCase().includes(query) || store.address.toLowerCase().includes(query)
    );
    if (filteredStores.length === 0) {
      storeResults.textContent = 'No stores found for the given location.';
      return;
    }
    storeResults.innerHTML = '';
    filteredStores.forEach(store => {
      const div = document.createElement('div');
      div.className = 'store-result mb-3 p-3 border rounded';
      div.innerHTML = `<h5>${store.name}</h5><p>${store.address}</p>`;
      storeResults.appendChild(div);
    });
  });

  const slides = document.querySelectorAll('#hero-slideshow .slide');
  let currentSlide = 0;
  const slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide+1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
});
