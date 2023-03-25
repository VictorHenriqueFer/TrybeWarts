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

const textarea = document.getElementById('textarea');
const contador = document.getElementById('counter');
const MAX_CARACTERES = 500;

textarea.addEventListener('input', () => {
  const quantidadeCaracteres = textarea.value.length;
  const caracteresRestantes = MAX_CARACTERES - quantidadeCaracteres;

  contador.innerHTML = caracteresRestantes;
});
const formularioList = document.createElement('form');

function newList({
  nome, sobrenome, email, casa, familia, materiaData,
  avaliacaoData, observacoes }) {
  const lista = document.createElement('ul');
  formularioList.id = 'form-data';

  const formData = [`Nome: ${nome} ${sobrenome}`, `Email: ${email}`, `Casa: ${casa}`,
    `Família: ${familia}`, `Matérias: ${materiaData}`, `Avaliação: ${avaliacaoData}`,
    `Observações: ${observacoes}`];

  formData.forEach((element) => {
    const item = document.createElement('li');
    item.innerHTML = element;
    lista.appendChild(item);
  });

  const container = document.getElementById('main-content');
  formularioList.appendChild(lista);
  container.appendChild(formularioList);
}

const formulario = document.getElementById('evaluation-form');

function family() {
  const checkboxes = document.getElementsByName('family');
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      return checkboxes[i].value; // Adiciona o valor do checkbox ao array
    }
  }
}

function materias() {
  const checkboxes = document.getElementsByName('materias');
  const materiasLista = [];
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      materiasLista.push(checkboxes[i].value); // Adiciona o valor do checkbox ao array
    }
  }
  let stringmateriasLista = materiasLista[0];
  for (let i = 1; i < materiasLista.length; i += 1) {
    stringmateriasLista += `, ${materiasLista[i]}`;
  }
  return stringmateriasLista;
}

function avaliacao() {
  const checkboxes = document.getElementsByName('rate');
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      return checkboxes[i].value; // Adiciona o valor do checkbox ao array
    }
  }
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('click');

  // formDados.style.display = 'block';
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const casa = document.getElementById('house').value;
  const familia = family();
  const materiaData = materias();
  const avaliacaoData = avaliacao();
  const observacoes = document.getElementById('textarea').value;
  // console.log(nome, sobrenome, email, casa, familia, materias, avaliacao, observacoes);
  formulario.style.display = 'none';
  newList({ nome, sobrenome, email, casa, familia, materiaData, avaliacaoData, observacoes });
});
