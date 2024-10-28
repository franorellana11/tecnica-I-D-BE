// 1. Crear un algoritmo que muestre los números impares entre el 0 y el 100.


function mostrarImpares(inicio, fin) {
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 !== 0) { 
      console.log(i); 
    }
  }
}

mostrarImpares(0, 100);
