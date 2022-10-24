import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHeroesAction } from './state/actions';
import { heroesSelector } from './state/selectors';

@Injectable()
export class MyFeatureProducer {
  public heroes$ = this.store.select(heroesSelector);

  public dispatchGetHeroes() {
    this.store.dispatch(getHeroesAction());
  }

  constructor(private store: Store) {}
}
