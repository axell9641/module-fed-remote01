import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityListComponent } from './identity/identity-list/identity-list.component';

const routes: Routes = [
  { path: '', component: IdentityListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
