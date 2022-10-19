import { Injectable } from '@angular/core';
import { PHRASES } from './mock.data';
import { PhraseInterface } from './phrase.interface';

const phrasesPromise: Promise<PhraseInterface[]> = new Promise ((resolve) => {
  setTimeout(() => {
    resolve(PHRASES)
  }, 2000)
})

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  constructor() { }

  getAllPhrases(): Promise<PhraseInterface[]> {

    return phrasesPromise;
  }

  getPhrase(id: number): Promise<PhraseInterface | undefined> {

    return phrasesPromise.then(phrases => phrases.find(phrase => phrase.id === id));

  }
}
