const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const inp = document.querySelector('input');
const txtar = document.querySelector('textarea');

try {
  const objStr = localStorage.getItem('feedback-form-state');
  if (objStr === '') {
    formData.email = '';
    formData.message = '';
  }
  const obj = JSON.parse(objStr);
  formData.email = obj.email;
  formData.message = obj.message;
  console.log(formData);
  inp.value = obj.email;
  txtar.value = obj.message;
  localStorage.clear();
} catch (error) {
  console.log(error.message);
}

form.addEventListener('input', handle);

function handle(event) {
  formData.email = inp.value.trim();
  formData.message = txtar.value.trim();
  //   const email = form.elements.email.value;
  //   const message = form.elements.message.value;
  if (formData.email === '' || formData.message === '') {
    console.log('Fill please all fields');
  }
  formData.email;
  formData.message;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
