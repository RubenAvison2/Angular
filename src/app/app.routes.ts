import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: "quienes-somos",
      loadComponent: () => import('./quienes-somos/quienes-somos')
      .then(m => m.QuienesSomos)       
    },
    { 
    path: 'mascota/:id', 
    loadComponent: () => import('./detalle/detalle')
    .then(m => m.Detalle) 
  },
    {
      path: '', redirectTo: 'quienes-somos', pathMatch: 'full' //si no hay path, por defecto redirigimos al quienes-somos
    },
    //Aquí es donde añadimos las rutas que tendremos
    
];
