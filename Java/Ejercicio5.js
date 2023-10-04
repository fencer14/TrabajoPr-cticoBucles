let instrucciones = "=";
let elPrompt;
let acumulaNumeros = [];
let elResultado = 0;

function Pedir()
{
    do {
        elPrompt = prompt("Ingresa números, para finalizar, ingrese '='");
        acumulaNumeros.push(elPrompt);
    } while (!isNaN(elPrompt))
    if(elPrompt == "=")
    {
        acumulaNumeros.pop();
        promptToNumber(acumulaNumeros)
        Sumar(acumulaNumeros, elResultado);
    }
}
function promptToNumber(miArray)
{
    for (let i = 0; i < miArray.length; i++) {
        miArray[i] = Number(miArray[i]);
    }
}
function Sumar(numeros, resultado)
{
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    console.log(resultado)
}

Pedir()
