import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhrasesRoutingModule } from './phrases-routing.module';
import { PhraseDetailsComponent } from './phrase-details/phrase-details.component';
import { PhrasesListComponent } from './phrases-list/phrases-list.component';


@NgModule({
  declarations: [
    PhraseDetailsComponent,
    PhrasesListComponent
  ],
  imports: [
    CommonModule,
    PhrasesRoutingModule
  ]
})
export class PhrasesModule { }
