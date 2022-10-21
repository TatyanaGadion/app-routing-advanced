import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHostComponent } from './admin-host/admin-host.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';


@NgModule({
  declarations: [
    AdminHostComponent,
    ManagePhrasesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
