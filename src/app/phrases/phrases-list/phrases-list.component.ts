import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PhraseInterface } from '../../shared/phrase.interface';
import { PhrasesService } from '../../shared/phrases.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: PhraseInterface[];
  private selectedID!: number

  constructor(
    private phrasesService: PhrasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params: Params) => {
        this.selectedID = +params['id'];

        this.phrasesService.getAllPhrases().then(
          result => {
            this.phrases = result;
          }
        );
      },
      error: () => {}
    })


  }

  onSelect(phrase: PhraseInterface): void {
    ///phrases/123
    // this.router.navigate(['phrase', phrase.id]).then();

    // /currentPath  from ctivatedRoute + /+123
    this.router.navigate([phrase.id], {
      relativeTo: this.activatedRoute
    }).then();
  }

  isSelected(phrase: PhraseInterface): boolean {
    return phrase.id === this.selectedID;
  }

}
