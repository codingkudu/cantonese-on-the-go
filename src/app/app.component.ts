import { Component, OnInit, NgModule } from '@angular/core';
import { Card, shuffle } from './deck';
import { GREETING_TRANSLATIONS } from './content/translations.greetings';
import { PRONOUNS_TRANSLATIONS } from './content/translations.pronouns';
import { SHOPPING_TRANSLATIONS } from './content/translations.shopping';
import { COMMONEXPRESSIONS_TRANSLATIONS } from './content/translations.common';
import { EATINGOUT_TRANSLATIONS } from './content/translations.eatingout';
import { CNY_TRANSLATIONS } from './content/translations.cny';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [NgModule]
})

export class AppComponent implements OnInit {

  title = '🐒 Cantonese Flash Cards 🌻';
  en = '';
  zhHK = '';
  hint = '';
  jyutping = '';
  deckIndex = 0;
  deck: Card[] = [];

  themes = [
    { name: 'Greetings', value: 1 },
    { name: 'Pronouns', value: 2 },
    { name: 'Shopping', value: 3 },
    { name: 'Expressions', value: 4 },
    { name: 'Eating out', value: 5 },
    { name: 'CNY', value: 6 }
  ];

  chosenDeck = this.themes[0].name;

  ngOnInit() {
    this.deck = shuffle(GREETING_TRANSLATIONS);
    this.en = this.deck[this.deckIndex].en;
    this.zhHK = this.deck[this.deckIndex].zhHK;
    this.hint = this.deck[this.deckIndex].hint;
    this.jyutping = '';

  }

  revealPronunciation() {
    this.jyutping = this.deck[this.deckIndex].jyutping;
  }

  nextPhrase() {
    this.deckIndex = (this.deckIndex + 1) % this.deck.length;
    this.en = this.deck[this.deckIndex].en;
    this.zhHK = this.deck[this.deckIndex].zhHK;
    this.hint = this.deck[this.deckIndex].hint;
    this.jyutping = '';
  }

  onChange(optionValue: string) {

    if (optionValue === '1') {
      console.log('Greetings was selected');
      this.deck = shuffle(GREETING_TRANSLATIONS);
    } else if (optionValue === '2') {
      this.deck = shuffle(PRONOUNS_TRANSLATIONS);
    } else if (optionValue === '3') {
      this.deck = shuffle(SHOPPING_TRANSLATIONS);
    } else if (optionValue === '4') {
      this.deck = shuffle(COMMONEXPRESSIONS_TRANSLATIONS);
    } else if (optionValue === '5') {
      this.deck = shuffle(EATINGOUT_TRANSLATIONS);
    } else {
      this.deck = shuffle(CNY_TRANSLATIONS);
    }

    this.deckIndex = 0;
    this.nextPhrase();
  }

}
