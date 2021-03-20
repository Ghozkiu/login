
var people = [];
people.push();
function singUp() {
    let nombre = document.getElementById("usuarioSingUp").value;
    let newPassword = document.getElementById("newPassword").value;
    let confPassword = document.getElementById("confirmPassword").value;

    if (newPassword == confPassword) {
        people.push(new Person(nombre, newPassword));
        alert("Se ha registrado con exito");
    } else {
        alert("ALGO MAL");
    }
}

function login() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if (checkData(new Person(usuario, password))) {
        alert("Se ha iniciado sesion");
    } else {
        alert("Datos invalidos")
    }
}

function checkData(person) {
    return people.includes(person);
}

function printAllUsers() {
    people.forEach(Person => console.log(Person.usuario));
}

function Person(usuario, password) {
    this.usuario = usuario;
    this.password = password;
}

