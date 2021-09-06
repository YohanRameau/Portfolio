import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardProjectComponent } from './content/card-project/card-project.component';

const routes: Routes = [{
  path: 'card-project-list', component: CardProjectComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
