import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { SampleFormComponent } from '../app/sample-form/sample-form.component'
import { SampleGridComponent } from '../app/sample-grid/sample-grid.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sample-form',
    component: SampleFormComponent
  },
  {
    path: 'sample-grid',
    component: SampleGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
