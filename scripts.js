// Reload the page when clicking the logo
document.getElementById('logo').addEventListener('click', function() {
    location.reload();
});


// Shrink navbar and hide logo on scroll
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }
});

// Toggle the menu visibility on hamburger click
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu ul li a');

    // Toggle menu visibility when hamburger is clicked
    hamburger.addEventListener('click', function(event) {
        menu.classList.toggle('active');
        event.stopPropagation(); // Prevents click from propagating to the document
    });

    // Close menu when clicking on a menu item
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });

    // Close menu when clicking outside of the menu
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});


(function() {
    emailjs.init("JPkcsduha4um0Ax0Q"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // These IDs should match your EmailJS service, template, and user IDs
    const serviceID = 'service_eojtu6x';
    const templateID = 'template_thg95ts';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});
