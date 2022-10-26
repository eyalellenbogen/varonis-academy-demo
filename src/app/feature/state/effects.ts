import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { combineLatest, filter, map, mergeMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { getHeroesAction, recieveHeroesAction } from './actions';

@Injectable()
export class HeroesEffects {
  public getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroesAction),
      mergeMap(() => {
        return this.api
          .getData()
          .pipe(map((heroes) => recieveHeroesAction({ heroes })));
      })
    )
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
