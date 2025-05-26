const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const progress = document.getElementById('progress');

// const lengthCriteria = document.getElementById('length');


// показ / скрытие пароля
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        openEye.style.display = "none";
        closeEye.style.display = "block";
    } else {
        passwordInput.type = "password";
        openEye.style.display = "block";
        closeEye.style.display = "none";
    }
});

const criteria = {
    length: document.getElementById('length'),
    number: document.getElementById('number'),
    symbol: document.getElementById('symbol'),
};

const checkPassword = () => {
    const password = passwordInput.value;

    let validCount = 0;
    if(password.length >= 8) {
        criteria.length.classList.add('valid');
        validCount++;
    } else{
        criteria.length.classList.remove('valid');
    }

    if(/\d/.test(password)) {
        criteria.number.classList.add('valid');
        validCount++;
    } else {
        criteria.number.classList.remove('valid');
    } 
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        criteria.symbol.classList.add("valid");
        validCount++;
    } else {
        criteria.symbol.classList.remove("valid");
    }

    const progressPercent = (validCount / 3) * 100;
progress.style.width = `${progressPercent}%`;

if (validCount === 1) progress.style.backgroundColor = 'red';
else if (validCount === 2) progress.style.backgroundColor = 'orange';
else if (validCount === 3) progress.style.backgroundColor = 'green';

}
passwordInput.addEventListener('input', checkPassword);

// обновление прогресса
