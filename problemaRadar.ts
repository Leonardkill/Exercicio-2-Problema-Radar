let freqcarro : number = 0.7
let velcarro : number
let constante : number = 300
let fradar : number = 120
let multa : number 

velcarro = 300 - (fradar/freqcarro - 1)
if (velcarro < 144) {
    console.log("Multa de : R$127,69")
    console.log(velcarro)
}
else{
    console.log("Multa de : R$574,62")
    console.log(velcarro)
}