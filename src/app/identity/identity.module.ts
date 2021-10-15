import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityListComponent } from './identity-list/identity-list.component';

@NgModule({
  declarations: [IdentityListComponent],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class IdentityModule {}
