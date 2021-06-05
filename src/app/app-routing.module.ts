import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorComponent } from './components/jugador/jugador.component';
import { GoleadoresComponent } from './components/goleadores/goleadores.component';

const routes: Routes = [
  { path: '', component: GoleadoresComponent },
  { path: 'jugador/:id', component: JugadorComponent },
  { path: '**', component: GoleadoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }