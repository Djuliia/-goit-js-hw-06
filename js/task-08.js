
const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;
    
    if (email.value && password.value) {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => console.log({[name]: value}));
        event.currentTarget.reset();
    } else {
        alert('Fill in all fields');
    } 
}