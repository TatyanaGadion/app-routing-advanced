import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PhrasesService } from './phrases.service';
import { PhraseInterface } from './phrase.interface';

@Injectable({
  providedIn: 'root',
})
export class PhraseDetailsResolver implements Resolve<PhraseInterface | boolean> {
  constructor(private phrasesService: PhrasesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<PhraseInterface | boolean> {
    const id = +route.params['id'];

    if (isNaN(id)) {
      this.emptyNavigate();
      return Promise.resolve(false);
    }
    return this.phrasesService.getPhrase(id)
      .then((phrase: PhraseInterface | undefined) => {
        if (phrase) return phrase;

        this.emptyNavigate();
        return false;
    });
  }

  private emptyNavigate(): void {
    this.router.navigate(['/phrases']).then();
  }
}
