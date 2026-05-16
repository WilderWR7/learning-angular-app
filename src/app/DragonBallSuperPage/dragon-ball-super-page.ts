import { Component, inject } from '@angular/core';
import { CharacterList } from '../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../components/dragonball/character-add/character-add';
import { DragonBallService } from '../services/dragonball.service';

@Component({
  templateUrl: './dragon-ball-super-page.html',
  imports: [CharacterList, CharacterAdd],
  selector: 'app-dragon-ball-super-page',
})
export class DragonBallSuperPage {
  public dragonBallService = inject(DragonBallService);
}
