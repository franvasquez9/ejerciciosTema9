// Crea una clase Persona con las siguientes variables: La edad, El nombre, El teléfono
class Persona{
    constructor(edad, nombre, telefono){
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
    }
};

class Cliente extends Persona { //crea una nueva clase Cliente que herede de Persona,
    constructor(edad, nombre, telefono, cerdito){
       super(edad, nombre, telefono); 
       this.credito = null; //esta nueva clase tendrá la variable credito solo para esa clase.
    }
    get getEdad() { return this.edad;}
    get getNombre() { return this.nombre;}
    get getTelefono() {  return this.telefono;}
    get getCredito() { return this.credito;}

    set setEdad(edad) { this.edad = edad; }
    set setNombre(nombre) {  this.nombres = nombre;} 
    set setTelefono(telefono) {  this.telefono = telefono; }
    set setCredito(credito) { this.credito = credito;} 
    
    
}
const miCliente = new Cliente(); //Crea ahora un objeto de la clase Cliente

//tienes que darles valor y mostrarlas por pantalla.
miCliente.setEdad = "31";
miCliente.nombre = "Omar";
miCliente.setTelefono = "08005000";
miCliente.setCredito = "100000";

console.log(miCliente);

//Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
class Trabajador extends Persona {
    constructor(edad, nombre, telefono, salario){
       super(edad, nombre, telefono); 
       this.salario = null;
    }

    get getEdad() { return this.edad;}
    get getNombre() { return this.nombre;}
    get getTelefono() {  return this.telefono;}
    get getSalario() { return this.salario;}

    set setEdad(edad) { this.edad = edad; }
    set setNombre(nombre) {  this.nombres = nombre;} 
    set setTelefono(telefono) {  this.telefono = telefono; }
    set setSalario(salario) { this.salario = salario;} 
    
    
}
const miTrabajador = new Trabajador();

miTrabajador.setEdad = "25";
miTrabajador.nombre = "Jose";
miTrabajador.setTelefono = "39993933";
miTrabajador.setSalario = "25000";

console.log(miTrabajador);


