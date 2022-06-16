
//javascript trabaja la programacion orientada a objetos en base a  prototipos 
//en 2015 javascript implemento las clases en modo de sintaxis por detras sigue usando prototipos
//en javascript no exixten las variables privadas

// creacion de clase Persona
class Persona{
    constructor(edad, nombre, telefono){
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
    }

    // Crear gets y sets de cada propiedad.
    get getEdad() { 
        return this.edad;
    }
    get getNombre() {
         return this.nombre; 
    }
    get getTelefono() { 
        return this.telefono; 
    }

    
    set setNombre(nombre) { 
        this.nombres = nombre; 
    } 
    set setTelefono(telefono) { 
        this.telefono = telefono; 
    } 
    set setEdad(edad) {
         this.edad = edad; 
    }


}

//  Crear un objeto persona
const miPersona = new Persona();

// Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, 
miPersona.setEdad = "30";
console.log(miPersona.getEdad);
miPersona.nombre = "Francisco";
console.log(miPersona.getNombre);
miPersona.setTelefono = "111222333";
console.log(miPersona.getTelefono);

//por último muéstralas por consola.
console.log(miPersona);

