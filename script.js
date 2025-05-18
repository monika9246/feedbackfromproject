document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name && email && message) {
    alert(`Thank you, ${name}! Your feedback has been received.`);
    this.reset();
  } else {
    alert('Please fill in all fields.');
  }
});