import { Routes } from '@angular/router';
import { CounterPage } from './CounterPage/counter-page';
import { HeroPage } from './HeroPage/hero-page';

export const routes: Routes = [
    {
        path: '',
        component: CounterPage,
    },
    {
        path: 'hero',
        component: HeroPage,
    }
];
