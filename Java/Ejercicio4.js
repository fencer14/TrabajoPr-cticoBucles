let numeroCuentaUser = prompt("numero 5 o te mato");

if(numeroCuentaUser % 5 == 0)
{
    do
    {
        console.log(numeroCuentaUser);
        numeroCuentaUser -= 1;
    }while(numeroCuentaUser >= 0)
}
else
{
    console.log("moriste apuñalado")
}
