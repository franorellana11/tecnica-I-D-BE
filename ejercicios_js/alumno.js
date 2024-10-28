// Plantear una clase llamada Alumno y definir como atributos su nombre y su edad.
// En el constructor realizar el ingreso de datos.
// Definir otros dos métodos para imprimir los datos ingresados
// y un mensaje si es mayor o no de edad (edad >= 18)

class Alumno {
  // nombre: String
  // edad: Number
  constructor(nombre, edad) {
    this.nombre = nombre; // Asignaciones
    this.edad = edad;
  }

  // imprime datos
  imprimirDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
  }

  // verificacion
  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} no es mayor de edad.`);
    }
  }
}

// instancia de la clase Alumno
const alumno1 = new Alumno("Francisco", 11);
alumno1.imprimirDatos();
alumno1.esMayorDeEdad();
