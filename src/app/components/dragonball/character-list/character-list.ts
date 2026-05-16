import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'dragon-ball-character-list',
  imports: [NgClass],
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  title = input.required<string>();
  characters = input.required<Character[]>();
}
