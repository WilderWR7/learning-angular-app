import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const character = localStorage.getItem('characters');
    return character ? JSON.parse(character) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonBallService {
    characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

    addCharacter(newCharacter: Character) {
        this.characters.update((chars) => [...chars, newCharacter]);
    }
}
