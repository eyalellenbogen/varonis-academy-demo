import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { ApiService, Hero } from '../api.service';
import { MyFeatureProducer } from './my-feature.producer';
import { getHeroesAction } from './state/actions';
import { heroesSelector } from './state/selectors';

@Component({
  selector: 'my-feature',
  templateUrl: './my-feature.component.html',
})
export class MyFeatureComponent {
  public heroes = this.producer.heroes$;

  constructor(private producer: MyFeatureProducer) {
    this.producer.dispatchGetHeroes();
  }
}
