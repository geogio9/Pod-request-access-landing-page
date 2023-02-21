const email = document.querySelector('.email');
const btn = document.querySelector('.btn')
const reg =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const error = document.querySelector('.error');


btn.addEventListener('click', () =>{
    if(reg.test(email.value)){
        alert('Your email is valid');
        return email.value = '';
    }else{
        error.style.display = 'block'
    }
});

// console.log(error);