import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragon-ball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if(!this.name() && this.power() < 0) {
      return;
    }
    const newCharacter: Character = {
      id: Date.now(),
      name: this.name(),
      power: this.power(),
    };
    this.reset();
    this.newCharacter.emit(newCharacter);
  }

  reset () {
    this.name.set('');
    this.power.set(0);
  }
}
