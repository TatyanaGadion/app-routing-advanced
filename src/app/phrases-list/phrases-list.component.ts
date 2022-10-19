import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhraseInterface } from '../shared/phrase.interface';
import { PhrasesService } from '../shared/phrases.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.scss']
})
export class PhrasesListComponent implements OnInit {

  phrases!: PhraseInterface[];

  constructor(
    private phrasesService: PhrasesService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.phrasesService.getAllPhrases().then(
      result => {
        this.phrases = result;
      }
    );
  }

  onSelect(phrase: PhraseInterface): void {
    //url/phrase/1
    this.router.navigate(['phrase', phrase.id]).then();
  }

}
