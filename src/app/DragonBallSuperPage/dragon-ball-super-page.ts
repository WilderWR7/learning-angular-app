import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CharacterList } from '../components/dragonball/character-list/character-list';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragon-ball-super-page.html',
  imports: [NgClass, CharacterList],
  selector: 'app-dragon-ball-super-page',
})
export class DragonBallSuperPage {
  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);
  addCharacter() {
    if (!this.name() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((chars) => [...chars, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }
}
