import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { error } from 'console';
import { PhraseInterface } from '../../shared/phrase.interface';
import { PhrasesService } from '../../shared/phrases.service';

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
    this.activatedRoute.params.subscribe({
      next: (params: Params) => {
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
      },
      error: (err) => console.log(err)

    });
  }

  gotoPhrasesList(): void {
    // /segment1/segment2/segment3
    // ../ => /segment1/segment2
    // ../ => /segment1

    // /phrases/id => ../phrases
    this.router.navigate(['../', {
      id: this.phrase?.id,
      param1: 'test',
      param2: 123
    }], {
      relativeTo: this.activatedRoute
    }).then();
  }

}
