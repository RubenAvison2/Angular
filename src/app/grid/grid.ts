import { Component } from '@angular/core';
import { Avatar } from "../avatar/avatar";
import { Directivas } from "../directivas/directivas";
import { Estructurales } from "../estructurales/estructurales";

@Component({
  selector: 'app-grid',
  imports: [Avatar, Directivas, Estructurales],
  templateUrl: './grid.html',
  styleUrl: './grid.css',
})
export class Grid {

}
