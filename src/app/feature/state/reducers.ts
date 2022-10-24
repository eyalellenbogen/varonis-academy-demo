import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/api.service';
import { getHeroesAction, recieveHeroesAction } from './actions';

const initialState = { heroes: [] as Hero[] };

export const herosReducer = createReducer(
  initialState,
  on(recieveHeroesAction, (state, a) => {
    return { ...state, heroes: a.heroes };
  })
);
