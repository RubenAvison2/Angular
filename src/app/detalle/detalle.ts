import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink], //Siempre que usemos redirecciones hay que importarlo (también añadirlo al imports)
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  id = input<string>(); //Esto es para poder usar el id
  mascotas = [
    { id: '1', name: 'Firulais', info: 'Le encanta correr por el jardín.' },
    { id: '2', name: 'Michi', info: 'Es un experto cazador de hilos.' },
    { id: '3', name: 'Paco', info: 'Repite todo lo que oye en la tele.' },
    { id: '4', name: 'Luna', info: 'Duerme todo el tiempo.' }
  ];
  mascotaEncontrada = computed(() => 
    this.mascotas.find(m => m.id === this.id())
  /*computed() en Angular es una función primitiva de Signals utilizada para crear 
  señales de solo lectura cuyo valor se deriva automáticamente de otras señales.
  Es decir, se queda escuchando id para ver si cambia. Pero esto solo lo hace si la
  página de detalle está cargada
  Find() recorre el array y devuelve el primer elemento que cumple la condición
*/
  );
}
