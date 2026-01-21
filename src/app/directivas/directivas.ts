import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  imports: [CommonModule, FormsModule], //Acordaros de añadirlo para usar las directivas
  templateUrl: './directivas.html',
  styleUrl: './directivas.css',
})
export class Directivas {
  image = "avatar.jpg";
  name = "Rubén";
  rol = "User";
  altImage = "Imagen de usuario";
  energia:number = 50;
}
