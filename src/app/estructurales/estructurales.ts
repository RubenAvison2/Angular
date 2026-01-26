import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-estructurales',
  imports: [CommonModule],
  templateUrl: './estructurales.html',
  styleUrl: './estructurales.css',
})
export class Estructurales {

   image = "avatar.jpg";
  name = "Rubén";
  rol = "User";
  altImage = "Imagen de usuario";
  energia:number = 50;

usuarios = [
  {
  image : "avatar.jpg",
  name : "Rubén",
  rol : "User",
  altImage : "Imagen de usuario",
  energia: 50,
},
{
  image : "avatar2.jpg",
  name : "Olga",
  rol : "Admin",
  altImage : "Imagen de usuario",
  energia: 70,
},
{
  image : "avatar3.jpg",
  name : "Juan",
  rol : "User",
  altImage : "Imagen de usuario",
  energia: 20,
},
{
  image : "avatar2.jpg",
  name : "Juana",
  rol : "User",
  altImage : "Imagen de usuario",
  energia: 20,

}
]
}