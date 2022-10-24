import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hero } from 'src/app/api.service';

const featureSelector = createFeatureSelector<{ heroes: Hero[] }>('my');
export const heroesSelector = createSelector(featureSelector, (s) => s.heroes);
