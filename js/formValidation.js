export function initFormValidation() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();

    if (name.length < 2 || !email.includes('@') || msg.length < 5) {
      alert('Моля, попълнете всички полета коректно.');
      return;
    }
    alert('Съобщението е изпратено успешно!');
    form.reset();
  });
}