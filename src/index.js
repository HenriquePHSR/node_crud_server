
console.log('script loading')
const userFiled = document.getElementById('user');
const passField = document.getElementById('pass');
const btnSubmit = document.querySelector('.btn-submit');
const btnNewAccount = document.getElementById('btn-newAccount');

userFiled.addEventListener('focus', e => {
    userFiled.value = '';
});

userFiled.addEventListener('focusout', e => {
    if (userFiled.value == '') {
        userFiled.value = '   username';
    }
});

passField.addEventListener('focus', e => {
    passField.value = '';
    passField.type = 'password';
});

passField.addEventListener('focusout', e => {
    if (passField.value == '') {
        passField.value = '   password';
        passField.type = 'text';
    }
});

btnSubmit.addEventListener('click',async e => {
    e.preventDefault();
    const user = {
        username: userFiled.value,
        pass: passField.value
    }
    const response = await fetch('/api/auth.js', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    const json = await response.json();
    if (json.username != undefined) {
        sessionStorage.setItem('userData',JSON.stringify(json));
        location.href = '/src/personView.html';
    } else {
        console.log('Login rejected');
    }
    

})