let freqcarro : number = 0.7
let velcarro : number
let fradar : number = 120
let multa : number 


let calcvelcarro = (radar:number,carro:number) => {
    velcarro = 300 - (fradar/freqcarro - 1)
if (velcarro < 144) {
    console.log("Multa de : R$127,69")
    console.log("A velocidade do carro é" + velcarro)
}
else{
    console.log("Multa de : R$574,62")
    console.log("A velocidade do carro é : " + velcarro)
}
}

calcvelcarro(fradar,freqcarro)