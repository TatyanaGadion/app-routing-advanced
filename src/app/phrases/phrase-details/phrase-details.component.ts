import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { error } from 'console';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { CanComponentDeactivateInterface } from 'src/app/shared/can-component-deactivate.interface';
import { PhraseInterface } from '../../shared/phrase.interface';
import { PhrasesService } from '../../shared/phrases.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss'],
})
export class PhraseDetailsComponent
  implements OnInit, CanComponentDeactivateInterface
{
  phrase!: PhraseInterface;
  editValue!: string;
  editLanguage!: string;

  constructor(
    private phrasesService: PhrasesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.phrase = data['phrase'];
      this.editValue = this.phrase.value;
      this.editLanguage = this.phrase.language;
    });
  }

  gotoPhrasesList(): void {
    this.router
      .navigate([
        '/phrases',
        {
          id: this.phrase?.id,
          param1: 'test',
          param2: 123,
        },
      ])
      .then();
  }

  save(): void {
    this.phrase.value = this.editValue;
    this.phrase.language = this.editLanguage;
  }

  isChanged(): boolean {
    return !(
      this.phrase.value === this.editValue &&
      this.phrase.language === this.editLanguage
    );
  }

  canDeactivate(): boolean {
    if (!this.phrase) return true;
    if (!this.isChanged()) return true;
    return confirm(
      'Вы не сохранили изменения \nДанные будут потеряны \nУйти со страницы в любом случае?'
    );
  }
}
