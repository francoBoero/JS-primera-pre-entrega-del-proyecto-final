let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")

   
let nombreCompleto = nombre + " " + apellido
    if (nombre != " " && apellido != " ") {
        alert(`bienvenido ${nombreCompleto}`)

        
    } else {
        alert("bienvenido don nadie")
        
    }
    



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
    

let comentario = prompt("desea dejenos su comentario acerca del servicio")


 while(comentario != " " && comentario != "esc" && comentario!= "ESC"){
  console.log( "gracias por tu comentario" + " " + nombre);
  comentario = prompt("deje otro comentario sino presione ESC");
 }



