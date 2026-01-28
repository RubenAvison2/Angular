import { ApplicationConfig, Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { Header } from "./header/header";
import { Avatar } from "./avatar/avatar";
import { Prueba } from "./prueba/prueba";
import { Directivas } from "./directivas/directivas";
import { Estructurales } from "./estructurales/estructurales";
import { Grid } from "./grid/grid";
import { routes } from './app.routes';
import { ObtenerJugador } from "./obtener-jugador/obtener-jugador";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Avatar, Prueba, Directivas, Estructurales, Grid, ObtenerJugador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('holaMundo');
}
