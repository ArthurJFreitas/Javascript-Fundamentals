const ferrari = {
    modelo: 'f40',
    velocidaMax: 340,
}

const volvo = {
    modelo: 'v40',
    velocidadeMax: 210,
}


console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);

