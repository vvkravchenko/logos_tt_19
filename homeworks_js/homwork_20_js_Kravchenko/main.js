// let form = document.forms.signUp;
// let table = document.getElementsByTagName('tbody');
// let users = new Array();

// form.addUser.addEventListener('click', function(){
//     let login = form.login.value;
//     let pass = form.pass.value;
//     let email = form.email.value;

//     let user = new User(login, pass, email);
//     users.push(user);

//     form.login.value = '';
//     form.pass.value = '';
//     form.email.value = '';

//     render();
// });



// function render(){
//     table.innerHTML = '';
//     for(let i = 0; i < users.length; i++){
//         let tr = document.createElement('tr');
//         let td = document.createElement('td');
//         td.innerText = i;
//         tr.appendChild(td);
//         for( let key in users[i]){
//             let usTd = document.createElement('td');
//             usTd.innerText = users[i][key];
//             tr.appendChild(usTd);
//         }       
//         let editTd = `<td><button>Edit</button></td>`;
//         let deleteTd = `<td><button>Delete</button></td>`;
//         tr.innerHTML += editTd;
//         tr.innerHTML += deleteTd;
//         table.innerHTML = `<td><button>Delete</button></td`;
//     }
//     console.log(users);
// };

// function User(login, pass, email){
//     this.login = login;
//     this.pass = pass;
//     this.email = email;
// }

let userForm = document.forms['signUp'];
let users = [];
let table = document.getElementById('table-body')
let index = 0;

userForm.addUser.addEventListener('click',function(){
    let log = userForm.login.value;
    let pass = userForm.password.value;
    let email = userForm.email.value;
    let newUser = new User(log,pass,email);
    users.push(newUser);
    userForm.login.value ="";
    userForm.pass.value = '';
    userForm.email.value = '';
    render()
})

userForm.editUser.addEventListener('click', function(){
    let log = userForm.login.value;
    let pass = userForm.password.value;
    let email = userForm.email.value;
    let editUser = new User(log,pass,email);
    users.splice(index,1,editUser);
    render();
    
    userForm.login.value ="";
    userForm.pass.value = '';
    userForm.email.value = '';
    userForm.editUser.classList.add('hide');
})


function render(){
    table.innerHTML = ''
    for(let i = 0; i < users.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = i+1;
        tr.appendChild(td)
        for(let key in users[i]){
            let usTD = document.createElement('td');
            usTD.innerText = users[i][key];
            tr.appendChild(usTD);
        }
        let editTD = `<td><button class="edit" onclick="editUser(${i})">Edit</button></td>`;
        let deleteTD = `<td><button class="delete" onclick="deleteUser(${i})">Delete</button></td>`;
        tr.innerHTML += editTD;
        tr.innerHTML += deleteTD;
        table.appendChild(tr);
    }
}

function deleteUser(id){
    users.splice(id,1);
    render();
}

function editUser(id){
    index = id;
    userForm.login.value = users[id].login;
    userForm.pass.value = users[id].password;
    userForm.email.value = users[id].email;
    userForm.editUser.classList.remove('hide');
}

function User(log,pass,email){
    this.login = log;
    this.password = pass;
    this.email = email;
}