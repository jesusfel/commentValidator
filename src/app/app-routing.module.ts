import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommnetsComponent } from './commnets/commnets.component';

const routes: Routes = [
  {path:'comments', component:CommnetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
