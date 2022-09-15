let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")

   
let nombreCompleto = nombre + " " + apellido
    if (nombre != " " && apellido != " ") {
        alert(`bienvenido ${nombreCompleto}`)

        
    } else {
        alert("bienvenido don nadie")
        
    }
  
  let toal = 0
  
 const productos = [
    {id: 1, prdocuto: "TV de 45 pulgadas", precio:50000},     {id: 2, prducto: " zapatllas nike jordan4", precio:30000}, {id: 3, producto: "remera del psg", precio:15000},
            ]
           
    carrito = []
    
    let uno = {id: 1, prdocuto: "TV de 45 pulgadas", precio:50000}
    let dos = {id: 2, prducto: " zapatllas nike jordan4", precio:30000}
    let tres = {id: 3, producto: "remera del psg", precio:15000}
    
    let cantidad = 0;
   
    
   

 


do{
    let entrada = prompt (`elija un producto:
    uno: TV  de 45 pulgadas $50000
    dos: zapatllas nike jordan4 $30000
    tres:remera del psg $15000
    si no desea nada escriba: NO`)
   

    if (entrada == "uno") {
        carrito.push(uno);
        cantidad += 1
    } if(entrada == "dos"){
        carrito.push(dos);
        cantidad += 1


    } 
    if(entrada == "tres"){
        carrito.push(tres);
        cantidad += 1


 

    } else {
        console.log("no sumaste nada al carrito")
    }
   
    console.log(carrito)
}while( cantidad !== 4)



const suma = carrito.map(producto => producto.precio).reduce((prev, curr) => prev + curr, 0);
alert("tu total a pagar es de:" + " " + suma + " " + "pesos");





    

