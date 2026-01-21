import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avatar',
  imports: [FormsModule,CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})/**Importamos FormModule para usar  ngmodel e importamos CommonModule
para usar las pipes*/
export class Avatar {
  name = "Ruben";
  image = "avatar.jpg";
  altImage = "Este es el texto por si falla la carga de la imagen";
  visitor: string = '';
  today:Date = new Date();
  contratar(){
     console.log("Contratado");
  }
}
