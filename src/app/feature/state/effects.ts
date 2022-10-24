import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { combineLatest, filter, map, mergeMap } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { getHeroesAction, recieveHeroesAction } from './actions';

@Injectable()
export class HeroesEffects {
  private o1 = this.api.getData();
  private o2 = this.api.getData();

  public getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroesAction),
      mergeMap(() => {
        return combineLatest([this.o1, this.o2]).pipe(
          map(([heroes, h2]) =>
            recieveHeroesAction({ heroes: heroes.concat(h2) })
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
