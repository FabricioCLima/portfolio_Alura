let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let form = document.querySelector('#form');
let text = document.querySelector('#text');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validaName()
})

function validaName(){
    let userName = nome.value;
    let emailValida = email.value;
    let textValue = text.value;
    
    if(userName === ' ' || emailValida === '' || textValue === ''){
        alert('Campo vazio!!!')
    } 
    console.log(userName);
}
