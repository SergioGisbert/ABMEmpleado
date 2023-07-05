import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';

const routes: Routes = [
  {path: 'add', component:AddEditEmpleadoComponent},
  {path: '', component: ListEmpleadoComponent},
  {path: 'edit/:id', component:AddEditEmpleadoComponent},
  {path: '**', component:ListEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
