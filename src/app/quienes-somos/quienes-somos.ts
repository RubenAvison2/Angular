import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  imports: [CommonModule, RouterLink], //importamos igual que en la otra para usar las rutas
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.css',
})
export class QuienesSomos {
  titulo = 'Nuestra Misión';
  descripcion = 'Somos una organización dedicada al rescate y adopción responsable de mascotas.';
  mascotas = [
    { id: '1', name: 'Firulais', type: 'Perro', image:'mascota1.jpg' },
    { id: '2', name: 'Michi', type: 'Gato', image:'mascota2.jpg' },
    { id: '3', name: 'Paco', type: 'Loro',image:'mascota3.jpg' },
    { id: '4', name: 'Luna', type: 'Perra',image:'mascota4.jpg' }
  ];
}
