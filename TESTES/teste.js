function helloNya(string, lenght) {
    for (let i = 0; i < lenght; i++) {
        console.log(string)  
    }    
}

helloNya("hehehe", 2)

// testes:

let n1 = 3
const n2 = 5

let n3 = n1 + n2

console.log("a soma eh: " + n3)

// objetos dentro de JS
let pessoa = {
    nome: "Jao",
    dizerOla: function () {
        console.log("olá me chamo " + this.nome + 2 + 2)  
    }
}

pessoa.dizerOla()