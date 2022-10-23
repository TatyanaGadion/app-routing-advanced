import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PhraseDetailsComponent } from '../phrases/phrase-details/phrase-details.component';
import { CanComponentDeactivateInterface } from './can-component-deactivate.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivateInterface> {

  canDeactivate(component: CanComponentDeactivateInterface): Observable<boolean> | Promise<boolean> |boolean {
    return component?.canDeactivate ? component?.canDeactivate() : true;
  }

}
