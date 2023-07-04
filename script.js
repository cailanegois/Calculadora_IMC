const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementsById('value');
    let descricao = '';

    if (imc < 18.5) {
        descricao = 'Cuidado! Você está abaixo do peso';
    }
    if (imc >= 18.5 && <= 25) {
        descricao = 'Você está no peso ideal!';
    }
    if (imc >= 25 && <= 30) {
        descricao = 'Cuidado! Você está com sobrepeso.';
    }
    if (imc >= 30 && <= 35) {
        descricao = 'Cuidado! Você está com obesidade moderada!';
    }
    if (imc >= 35 && <= 40) {
        descricao = 'Cuidado! Você está com obesidade severa!';
    } else {
        descricao = 'Cuidado! Você está com obesidade morbida!';

    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('descricao').textContent = descricao;


});