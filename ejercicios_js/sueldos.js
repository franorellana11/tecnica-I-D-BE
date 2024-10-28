// Realizar un programa que ingrese los sueldos de 5 operarios en un vector.
// Realizar la creación y carga del vector en el constructor.
// Crear un método para imprimir el vector.

class Sueldos {
  constructor() {
    this.sueldos = []; // arreglo vacio
    this.cargarSueldos(); // llenador de datos mock
  }

  //vector con sueldos mock
  cargarSueldos() {
    const sueldosMock = [1500.5, 1800.75, 1600.0, 1700.25, 1650.0];
    this.sueldos = sueldosMock;
  }

  imprimirSueldos() {
    console.log("Sueldos de los operarios:");
    this.sueldos.forEach((sueldo, index) => {
      // Parametro Sueldo recibe el valor del array y el index la posición. For Each recorre el array
      console.log(`Operario ${index + 1}: $${sueldo}`);
    });
  }
}

const sueldosOperarios = new Sueldos();
sueldosOperarios.imprimirSueldos();
