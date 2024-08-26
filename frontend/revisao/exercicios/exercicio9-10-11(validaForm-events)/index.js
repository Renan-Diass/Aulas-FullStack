function validateForm(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    let valid = true;

    if (nome === '') {
        alert('O campo Nome é obrigatório.');
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('O campo Email deve ser um email válido.');
        valid = false;
    }

    if (senha.length < 6) {
        alert('O campo Senha deve ter pelo menos 6 caracteres.');
        valid = false;
    }

    if (valid) {
        alert('Formulário enviado com sucesso!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);

    const nomeField = document.getElementById('nome');
    const emailField = document.getElementById('email');
    const senhaField = document.getElementById('senha');

    nomeField.addEventListener('keyup', (event) => {
        console.log(`Tecla pressionada no campo Nome: ${event.key}`);
    });

    emailField.addEventListener('focus', () => {
        console.log('Campo Email em foco.');
    });

    senhaField.addEventListener('blur', () => {
        console.log('Campo Senha perdeu o foco.');
    });
});
