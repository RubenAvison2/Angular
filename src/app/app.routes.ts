import { Routes } from '@angular/router';
import { Detalle } from './detalle/detalle';
import { QuienesSomos } from './quienes-somos/quienes-somos';

export const routes: Routes = [
    {
      path: "quienes-somos",component:QuienesSomos     
    },
    { 
    path: 'mascota/:id', component:Detalle
  },
    {
      path: '', redirectTo: 'quienes-somos', pathMatch: 'full' //si no hay path, por defecto redirigimos al quienes-somos
    },
    //Aquí es donde añadimos las rutas que tendremos
    
];
