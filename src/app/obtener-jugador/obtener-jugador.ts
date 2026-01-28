import { Component, OnInit } from '@angular/core';
import {http} from './http'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obtener-jugador',
  imports: [CommonModule],
  templateUrl: './obtener-jugador.html',
  styleUrl: './obtener-jugador.css',
})
export class ObtenerJugador implements OnInit {
datos: any;
  idJugador: number = 16271; 
  constructor(private futbolService: http) {}

  ngOnInit() {
    this.cargarDatos(this.idJugador);
  }

  cargarDatos(id: number) {
    this.futbolService.getJugador(id).subscribe({
      next: (res) => {
        this.datos = res;
        console.log('Datos recibidos:', res);
      },
      error: (e) => console.error('Error:', e)
    });
  }
}
