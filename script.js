const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const logInBtn = document.querySelector('.log');
const signInBtn = document.querySelector('.sign');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');   
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');   
});