const a = 1;
const b = 2;
const c = 3;

const obj1 = {a, b, c}

const obj2 = {a: a, b: b, c: c}

console.log(obj1, obj2);

const nomeAtrr = 'nota';
const valotAttr = 7.78;

const obj3 = {}

obj3[nomeAtrr] = valotAttr
console.log(obj3);

const obj4 = {[nomeAtrr]: valotAttr};
console.log(obj4);

const obj5 = {
    funcao1: function () {
        // ...
    }, 
    funcao2(){
        // ...
    }
}

console.log(obj5);