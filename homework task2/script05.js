const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const myForm = document.querySelector('#myForm');
const submit = document.querySelector('#submit');



function removeDisabled(anyInput){

    anyInput.addEventListener('change', () => {
        console.log(anyInput.value);

        if (username.value && email.value && password.value ) {
            submit.removeAttribute ('disabled', true)
        }else {
            submit.setAttribute ('disabled', true)

        }
    }
    )
}

removeDisabled(username)
removeDisabled(email)
removeDisabled(password)
