let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")

   
let nombreCompleto = nombre + " " + apellido
    if (nombre != " " && apellido != " ") {
        alert(`bienvenido ${nombreCompleto}`)

        
    } else {
        alert("bienvenido don nadie")
        
    }
    /*let ellecion = prompt("elija alguna de esta opcion: prdocuto 1:TV de 45 pulgadas, precio:50000. Prducto2:  zapatllas nike jordan4, precio:30000.  Producto3: remera del psg, precio:15000")
    
    
    if (eleccion === 1){

    }
   */
  let toal = 0
 /* const productos = [
    {id: 1, prdocuto: "TV de 45 pulgadas", precio:50000},     {id: 2, prducto: " zapatllas nike jordan4", precio:30000}, {id: 3, producto: "remera del psg", precio:15000},
            ]*/
           
    carrito = []
    
    function compra(){
        let uno = {id: 1, prdocuto: "TV de 45 pulgadas", precio:50000}
        let dos = {id: 2, prducto: " zapatllas nike jordan4", precio:30000}
        let tres = {id: 3, producto: "remera del psg", precio:15000}
        let option =  prompt(`elija un producto:
        uno: TV de 45 pulgadas $50000
        dos: zapatllas nike jordan4 $30000
        tres:remera del psg $15000
        si no desea nada escriba: NO`);
        switch(option){
            case "uno": 
            return carrito.push(uno);
                alert("se ha agregado un producto a su carrito");
               

                break;
            case "dos": 
            return carrito.push(dos);
                  alert("se ha agregado un producto a su carrito");
                
                break;
            case "tres": 
            return carrito.push(tres);
            alert("se ha agregado un producto a su carrito");
            
                break;
            
            default: return alert("re seco andas o que?")   
                break;
    
        }
    }
    compra()
 
 
 

    for (const producto of carrito){
        console.log(carrito.id);
        console.log(carrito.prodcuto);
        console.log(carrito.precio)
    
    }
        
   
 let total = carrito.forEach((producto)=>(precio += carrito.precio))
    alert (`el total a pagar es de: ${total}`)
    
   
    
    
  
    
    

    



/*
 function compra(){
    let uno = (50000)
    let dos = (30000)
    let tres = (15000)
    let option =  prompt(`elija un producto:
    uno: TV de 45 pulgadas $50000
    dos: zapatllas nike jordan4 $30000
    tres:remera del psg $15000`);
    switch(option){
        case "uno":
            return console.log(`el precio a pagar es de ${uno} pesos`);
            break;
        case "dos":
            return console.log(`el precio a pagar es de ${dos}pesos`);
            break;
        case "tres":
            return console.log(`el precio a pagar es de ${tres}pesos`);
            break;
        
        default:
            return alert("re seco andas o que?")   
            break;

    }
   
     
    
    }
    compra()
    */



    

