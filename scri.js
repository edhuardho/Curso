const cA = document.getElementById("campoA");
const cB =document.getElementById("campoB");

const formu = document.getElementById("forma")

formu.addEventListener('submit' , (load) =>{
    if(cA.value < cB.value){
        alert("Valido")
    }
        else{
            alert("O campo B deve ser maior que o campo A")
        }


    console.log(cA.value);
    console.log(cB.value)
    load.preventDefault()
})
