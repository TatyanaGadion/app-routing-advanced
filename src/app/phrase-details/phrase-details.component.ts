import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhraseInterface } from '../shared/phrase.interface';
import { PhrasesService } from '../shared/phrases.service';

@Component({
  selector: 'app-phrase-details',
  templateUrl: './phrase-details.component.html',
  styleUrls: ['./phrase-details.component.scss']
})
export class PhraseDetailsComponent implements OnInit {

  phrase?: PhraseInterface;

  constructor(
    private phrasesService: PhrasesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      const id = +params['id'];

      if (isNaN(id)) {
        console.log('Ошибка: параметр запроса - не число');
        return;
      }

      this.phrasesService
      .getPhrase(id)
      .then(
        result => {
          this.phrase = result;
        }
      );
    });
  }

  gotoPhrasesList(): void {
    this.router.navigate(['/phrases']).then();
  }

}
