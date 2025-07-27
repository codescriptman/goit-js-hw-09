const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const inp = document.querySelector('input');
const textarea = document.querySelector('textarea');

try {
  const obj = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = obj.email;
  formData.message = obj.message;
  console.log(formData);
  inp.value = obj.email;
  textarea.value = obj.message;
} catch (error) {
  console.log(error.message);
}

form.addEventListener('input', handle);

function handle(event) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  formData.email = inp.value.trim();
  formData.message = textarea.value.trim();
}

form.addEventListener('submit', event => {
  localStorage.clear();
  form.reset();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  }
});
