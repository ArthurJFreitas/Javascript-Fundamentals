var funcs = []

for (let i = 0; i<10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[0]()
funcs[5]()
funcs[8]()