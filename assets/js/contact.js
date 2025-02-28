  // Initialize EmailJS
  (function() {
    emailjs.init('Mh8q33tv27kmx51eq'); // Replace YOUR_USER_ID with your EmailJS user ID
  })();

  // Add event listener to the form
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show the loading text
    document.querySelector('.loading').style.display = 'block';

    // Send the form data to EmailJS
    emailjs.sendForm('service_ckta25e', 'template_0ekkf4d', this)
      .then(function(response) {
        console.log('SUCCESS', response);
        // Hide the loading text and show the success message
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.sent-message').style.display = 'block';
      }, function(error) {
        console.log('FAILED', error);
        // Hide the loading text and show the error message
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
      });
  });