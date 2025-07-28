const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

const saved = localStorage.getItem('feedback-form-state');
if (saved) {
  try {
    const data = JSON.parse(saved);
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
    formData.email = data.email || '';
    formData.message = data.message || '';
  } catch {}
}

function handle(event) {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', handle);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }
  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
});
