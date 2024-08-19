// Formulario validação home

document.addEventListener('DOMContentLoaded', function() {
    const emailHome = document.querySelector('#emailHome');
    const homeButton = document.querySelector('#home-button');

    homeButton.addEventListener('click', () => {
        const emailH = emailHome.value.trim();

        if (emailH === '' || !emailValidacao(emailH)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        localStorage.setItem('emailHome', emailH); 
        alert('E-mail salvo com sucesso!');
        emailHome.value = ''; 
    });

    // Função para validar e-mail
    function emailValidacao(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
