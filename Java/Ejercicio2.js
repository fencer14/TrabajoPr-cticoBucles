let numeroParaTabla = prompt("Ingresar número");

while (numeroParaTabla % 2 == 0) 
{
    numeroParaTabla = prompt("Ingresar número");
}
for (let i = 0; i <= 10; i++) {
    const tablaPosicion = numeroParaTabla;
    console.log(numeroParaTabla * i);
}