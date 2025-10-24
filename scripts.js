// Theme toggle

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const submitButton = this.querySelector('button[type="submit"]');
    
    // Hide any existing messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';
    
    // Prepare the parameters
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send the email using EmailJS
    emailjs.send('service_tco96ei', 'template_g5sanrh', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            successMessage.style.display = 'block';
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            errorMessage.style.display = 'block';
        })
        .finally(function() {
            // Re-enable submit button and restore original text
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        });
});
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = modeToggle.querySelector('i');
  icon.classList.toggle('bx-moon');
  icon.classList.toggle('bx-sun');
});

// Animate hero text
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-subtext');
  setTimeout(() => heroText.classList.add('visible'), 300);
});

// Smooth scroll for nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
