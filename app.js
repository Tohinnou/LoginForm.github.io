const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link')
const wrapper = document.querySelector('.wrapper')
const btnLogin = document.querySelector('.btnLogin-popup')
const close = document.querySelector('.form-close')
const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')

registerLink.addEventListener('click',() => {
    wrapper.classList.add('active')
    
})

loginLink.addEventListener('click',() => {

    wrapper.classList.remove('active')
    
})

btnLogin.addEventListener('click',() => {
    wrapper.classList.add('active-popup')
})


close.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})

hamburger.addEventListener('click',() => {

    hamburger.classList.toggle('click')

    navigation.classList.toggle('move')
})

