// Função em JS é firstClassObject ou fisrtClassCitizens
//Higher-order function

// Criar funçai literal
function fun1(){

}

//Funçao em variável

const fun2 = function() { }

//Armazenar em um array
const array = [function (a,b){ return a+b}, fun1, fun2]

console.log(array[0](2, 3))

//Armazenar em um Objeto
const obj = {}

obj.falar = function(){
        return 'Opa'
    }

console.log(obj.falar())

//Funçao como parametro
function run(fun){
    fun()
}

run(function() {console.log('Execuntando...')})

// Uma função pode retornar//conter uma funçao

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

//Chamada de funções 
soma(2,3)(8)

const cincoMais = soma(2,3)
cincoMais(4)