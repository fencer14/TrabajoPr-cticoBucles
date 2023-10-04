let elPrompt;
let acumulaNumeros = [];
let elResultado;

function Pedir()
{
    do {
        elPrompt = prompt("Ingresa números, para finalizar, ingrese '='");
        acumulaNumeros.push(elPrompt);
        if(elPrompt == "=")
        {
            break;
        }
    } while (!isNaN(elPrompt))
    console.log("Llegamos")
    acumulaNumeros.pop();
    promptToNumber(acumulaNumeros)
    elPrompt = prompt("Y ahora? Sumar, Restar, Multiplicar o Dividir")
    let instruccion = elPrompt.toLowerCase();
    console.log(instruccion)

    if(instruccion == "sumar")
    {
        Sumar(acumulaNumeros, elResultado);
    }
    if(instruccion == "restar")
    {
        Restar(acumulaNumeros, elResultado);
    }
    if(instruccion == "multiplicar")
    {
        Multiplicar(acumulaNumeros, elResultado);
    }
    if(instruccion == "dividir")
    {
        Dividir(acumulaNumeros, elResultado);
    }
}
function promptToNumber(miArray)
{
    for (let i = 0; i < miArray.length; i++) {
        miArray[i] = Number(miArray[i]);
    }
    elResultado = acumulaNumeros[0];
}
function Sumar(numeros, resultado)
{
    for (let i = 1; i < numeros.length; i++) {
        resultado += numeros[i];
        console.log(resultado)
    }
    console.log(resultado)
}
function Restar(numeros, resultado)
{
    for (let i = 1; i < numeros.length; i++) {
        resultado -= numeros[i];
        console.log(resultado)
    }
    console.log(resultado)
}
function Multiplicar(numeros, resultado)
{
    for (let i = 1; i < numeros.length; i++) {
        resultado *= numeros[i];
        console.log(resultado)
    }
    console.log(resultado)
}
function Dividir(numeros, resultado)
{
    for (let i = 1; i < numeros.length; i++) {
        resultado /= numeros[i];
        console.log(resultado)
    }
    console.log(resultado)
}

Pedir()
