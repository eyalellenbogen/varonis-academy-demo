import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/api.service';

export const getHeroesAction = createAction('[HEROES] get heroes');
export const recieveHeroesAction = createAction(
  '[HEROES] recieve heroes',
  props<{ heroes: Hero[] }>()
);
