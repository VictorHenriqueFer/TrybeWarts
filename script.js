const login = () => {
  const subBtn = document.getElementById('subBtn');
  const ema = document.getElementById('email');
  const pw = document.getElementById('password');
  const btnAlert = () => {
    if (ema.value === 'tryber@teste.com' && pw.value === '123456') { alert('Olá, Tryber!'); } else {
      alert('Email ou senha inválidos.');
    }
  };

  subBtn.addEventListener('click', btnAlert);
};
login();

const checkbox = document.getElementById('agreement');
const btn = document.querySelector('#submit-btn');

btn.disabled = true;
checkbox.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    btn.disabled = false;
  }
});
