var freqcarro = 0.7;
var velcarro;
var fradar = 120;
var multa;
var calcvelcarro = function (radar, carro) {
    velcarro = 300 - (fradar / freqcarro - 1);
    if (velcarro < 144) {
        console.log("Multa de : R$127,69");
        console.log("A velocidade do carro é" + velcarro);
    }
    else {
        console.log("Multa de : R$574,62");
        console.log("A velocidade do carro é : " + velcarro);
    }
};
calcvelcarro(fradar, freqcarro);
