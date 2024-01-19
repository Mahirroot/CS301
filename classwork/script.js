// const users = [
//     {
//         id: 1,
//         username: 'Yaqut',
//         age: 26,
//     },
//     {
//         id: 2,
//         username: 'Nezrin',
//         age: 20,
//     },
//     {
//         id: 3,
//         username: 'Yaqub',
//         age: 26,
//     },
//     {
//         id: 4,
//         username: 'Murad',
//         age: 29,
//     },
//     {
//         id: 5,
//         username: 'Tural',
//         age: 23,
//     },
//     {
//         id: 6,
//         username: 'Murad',
//         age: 30,
//     },
// ]

// let sum = 1
// for (let i = 0; i < users.length; i++) {
//      if ( (users[i].age>25 )) {
//         sum = sum * users[i].age;{

//         }
//     }   
// }
// console.log(sum);


// sum = 0
// for (let i = 0; i < users.length; i++) {
//     if (users[i].username.startsWith("Y") || users[i].username.startsWith("M"))
//     sum = sum + i
    
// }
// console.log(sum);



const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmpassword = document.querySelector('#confirmpassword')
const isAdmin = document.querySelector('#admin')
const myForm = document.querySelector('#myForm')
const submit = document.querySelector('#submit')
myForm.addEventListener ('submit', (e) => {
    e.preventDefault()
    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmpassword: password.value,
        admin: admin.value
    }
   
    if (confirmpassword.value !==password.value) {
    console.log('passwords match')
    
} else if (isAdmin.checked){
    window.location = 'admin.html'
}
else  {
console.log('user',user); 
}
})

function removeDisabled(anyInput){
    anyInput.addEventListener('change', () => {
        if (username.value && email.value && password.value &&confirmpassword.value) {
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
removeDisabled(confirmpassword)