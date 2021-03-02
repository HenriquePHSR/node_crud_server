const btnEdit = document.getElementById('btn-edit');
const btnLogout = document.querySelector('.btn-logout');
const userName = document.getElementById('name');

const userData = JSON.parse(sessionStorage.getItem('userData'));
userName.innerHTML = userData.username;

btnEdit.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('/src/formView.html');
});

btnLogout.addEventListener('click', e => {
    e.preventDefault();
    window.location.replace('/index.html');
});