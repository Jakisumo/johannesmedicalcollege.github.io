// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Simple Validation Example
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
  
    if (fullName && email && course) {
      alert(`Thank you, ${fullName}! Your application for ${course} has been submitted successfully.`);
      this.reset(); // Clear the form
    } else {
      alert('Please fill in all required fields.');
    }
  });
// script.js

// Form validation (basic)
document.getElementById('applicationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const requiredFields = [
    'fullName', 'dob', 'gender', 'email', 'phone', 
    'meanGrade', 'english', 'kiswahili', 'mathematics', 
    'biology', 'chemistry', 'course'
  ];

  let valid = true;
  let missingFields = [];

  requiredFields.forEach(function(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
      valid = false;
      missingFields.push(fieldId);
    }
  });

  if (!valid) {
    alert('Please fill in all required fields: ' + missingFields.join(', '));
    return;
  }

  // If everything is valid
  alert('Application Submitted Successfully!');
  this.reset();
});
 document.addEventListener("DOMContentLoaded", function () {
  const formIframe = document.querySelector('#application-form iframe');

  // Optional: Show loading message until iframe is fully loaded
  formIframe.addEventListener('load', () => {
    console.log('Google Form loaded successfully.');
  });
});
 