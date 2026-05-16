import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  templateUrl: './dragon-ball-page.html',
  imports: [NgClass],
  selector: 'app-dragon-ball-page',
})
export class DragonBallPage {
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
