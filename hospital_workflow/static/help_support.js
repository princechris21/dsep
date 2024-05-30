// Toggle FAQ answers
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const answer = item.querySelector('.faq-answer');
    answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';
  });
});

// Handle Contact Support form submission
document.getElementById('sendSupportMessageBtn').addEventListener('click', function() {
  const supportEmail = document.getElementById('supportEmail').value;
  const supportMessage = document.getElementById('supportMessage').value;

  if (supportEmail && supportMessage) {
    console.log(`Support Email: ${supportEmail}`);
    console.log(`Support Message: ${supportMessage}`);
    alert('Your message has been sent. Our support team will get back to you soon.');
    // Reset form
    document.getElementById('contactSupportForm').reset();
  } else {
    alert('Please fill out all fields.');
  }
});
