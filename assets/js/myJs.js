function Usuario(nombre,identificador, clave, saldo) {
    this.nombre = nombre;
    this.identifcador = identificador;
    this.clave = clave;
    this.saldo = saldo;
}


    let Usuario1 = new Usuario("Carlos Gomez","CG12","1",50000);
    let Usuario2 = new Usuario("Patricia Velado","Paty741","2",100000);
    let Usuario3 = new Usuario("Catalina Rivas","CataRi15","3",70000);

const usuarios = [
    Usuario1, Usuario2, Usuario3
]

console.log(usuarios)

let clave = parseInt(prompt("Profavor ingrese su clave: "));

consultarPorUsuario(usuarios, clave)

function consultarPorUsuario(usuarios, clave) {
   let i = 0;
   let usuarioEncontrado = false;
 
    while (i < usuarios.length) {

        console.log(usuarios.length)
        if (usuarios[i].clave == clave) {
            console.log(usuarios[i].clave)
            alert('Bienvenido: ' + usuarios[i].nombre);
            let menuOpciones = parseInt(prompt("Bienvenido" + usuarios[i].nombre + "\nPorfavor elige una opcion \n 1.- Ver saldo \n 2.- Realizar giro \n 3.- Realizar deposito 4.- Salir  "));
            do {
                
                switch (menuOpciones) {
                    case 1:
                        console.log("Tu saldo es: " + usuarios[i].saldo);
                        break;
                    case 2:
                        //console.log("Tu saldo es: " + usuarios[i].saldo);
                        let giro = parseInt(prompt("Ingresa el monto a girar:"));
                        if (giro < usuarios[i].saldo) {
                            let saldoFinal = usuarios[i].saldo - giro;
                            alert("Giro realizado con exito");
                           alert("Tu saldo actual es: " + saldoFinal);
                           break;
                        }
                        break;
                    case 3:
                        console.log(usuarios[i].saldo)
                        let deposito = parseInt(prompt("Ingresa el monto a depositar:"));
                        let saldoFinalDeposito = usuarios[i].saldo + deposito;
                        alert("Tu saldo final es: " + saldoFinalDeposito);
                        break;

                    case 4:

                        alert("Gracias por preferirnos");
                        break;


                    default:
                        alert("Elige una opcion");
                        break;
                }
            } while (menuOpciones !== 4);

            usuarioEncontrado = true;    
            break;
        }
        i++; 
    }
    if(!usuarioEncontrado){
        alert("Error, usuario no encontrado")
    }
}







