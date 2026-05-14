import { Routes } from '@angular/router';
import { CounterPage } from './CounterPage/counter-page';
import { HeroPage } from './HeroPage/hero-page';
import { DragonBallPage } from './DragonBallPage/dragon-ball-page';
import { DragonBallSuperPage } from './DragonBallSuperPage/dragon-ball-super-page';

export const routes: Routes = [
    {
        path: '',
        component: CounterPage,
    },
    {
        path: 'hero',
        component: HeroPage,
    },
    {
        path: 'dragonball',
        component: DragonBallPage,
    },
    {
        path: 'dragonballsuper',
        component: DragonBallSuperPage,
    },
    {
        path: '**',
        redirectTo: '',
    }
];
