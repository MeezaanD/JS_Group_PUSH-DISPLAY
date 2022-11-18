let users = [];

function addUsers(){
    let template = users.map(user => `<li>${user}</li>`).join('\n');
    document.querySelector('ul');
}

addUsers();

let btnAdd = document.getElementById('button1');
let input = document.querySelector('input');

// Using addlistener
// Using Push to add the names to the array
btnAdd.addEventListener('click', () =>{
    users.push(input.value);
    input.value = '';
    addUsers();
    alert("Name entered successfully");       
});

let btnAdd2 = document.getElementById('button2')
let input2 = document.querySelector('input');

// Displaying the array in the console
btnAdd2.addEventListener('click', () =>{
    users.push(input2.value);
    addUsers(); 
    console.log(users)        
});