//Corrente de protótipos {protochain}
Object.prototype.atrr0 = '0';   // Não faça isso em casa


const avo = {atrr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 3}
const filho = { __proto__ : pai, attr3: 'C', attr4: 'D'}


console.log(filho.atrr0, filho.atrr1, filho.attr2, filho.attr3);
console.log(pai.attr4);

const carro = {
    velAtual: 0, 
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
                this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340,
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);


console.log(volvo);
console.log(ferrari);

volvo.acelerarMais(300);
ferrari.acelerarMais(300);

console.log(volvo.status());
console.log(ferrari.status());
