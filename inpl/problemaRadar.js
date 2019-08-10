var freqcarro = 0.7;
var velcarro;
var constante = 300;
var fradar = 120;
var multa;
velcarro = 300 - (fradar / freqcarro - 1);
if (velcarro < 144) {
    console.log("Multa de : R$127,69");
    console.log(velcarro);
}
else {
    console.log("Multa de : R$574,62");
    console.log(velcarro);
}
