u=parseInt(prompt("Ingrese un número"))
d=parseInt(prompt("Ingrese otro número, pero mayor que el anterior"))
acum=0
if (d>u) {
    for(i=u;i<=d;i++){
        console.log(i)
acum+=i
    }
alert("La suma de los números desde "+u+" hasta "+d+" es "+acum)
}
else{
    alert("No se pudo realizar el algoritmo")
}