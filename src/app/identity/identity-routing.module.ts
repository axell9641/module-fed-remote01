import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityListComponent } from './identity-list/identity-list.component';

const routes: Routes = [
  {
    path: 'identity-list',
    component: IdentityListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityRoutingModule { }
