// Adiciona um evento, que será acionado quando o DOM estiver totalmente carregado

document.addEventListener('DOMContentLoaded', function() {
    //carregar o header e inserir no html
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    //carregar o footer e inserir no html
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
    
});


// Formulário validação contact
const form = document.querySelector('#formu');
const nameInput = document.querySelector('#nome');
const lastName = document.querySelector('#lastNome');
const emailInput = document.querySelector('#email');
const messageText = document.querySelector('#msg');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Verificar nome se está vazio
    if (nameInput.value.trim() === '') {
        alert('Digite o nome');
        return;
    }

    if (lastName.value.trim() === '') {
        alert('Digite o sobrenome');
        return;
    }

    if (emailInput.value.trim() === '' || !emailValidacao(emailInput.value)) {
        alert('Preencha o email');
        return;
    }

    if (messageText.value.trim() === '') {
        alert('Mensagem obrigatória');
        return;
    }
    // Armazenar dados no LocalStorage
    const formData = {
        nome: nameInput.value.trim(),
        sobrenome: lastName.value.trim(),
        email: emailInput.value.trim(),
        mensagem: messageText.value.trim()
    };

    localStorage.setItem('formData', JSON.stringify(formData));

    alert('Dados armazenados!');
    form.reset();
});

// Função para validar e-mail
function emailValidacao(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Email do button continue contact
const emailContinue = document.querySelector('#emailContinue')
const continueButton = document.querySelector('#continue-button');

continueButton.addEventListener('click', () => {
    const email = emailContinue.value.trim();
    
    if (email === '' || !emailValidacao(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    const emailContinuee = {
        email: emailContinue.value.trim()
    }

    localStorage.setItem('emailContinuee', JSON.stringify(emailContinuee));    
    alert('E-mail Enviado!');

    emailContinue.value = '';
});


// Função para recuperar e exibir dados armazenados 
function recuperarDados() {
    const formData = localStorage.getItem('formData');
    if (formData) {
        console.log('Dados do formulário armazenados:', JSON.parse(formData));
    } else {
        console.log('Nenhum dado de formulário encontrado.');
    }
    const emailContinueData = localStorage.getItem('emailContinuee');
    if (emailContinueData) {
        console.log('Dados do e-mail  armazenados:', JSON.parse(emailContinueData));
    } else {
        console.log('Nenhum dado de e-mail de encontrado.');
    }
}
recuperarDados();
