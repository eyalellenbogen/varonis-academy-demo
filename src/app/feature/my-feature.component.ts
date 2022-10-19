import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService, Hero } from '../api.service';

@Component({
  selector: 'my-feature',
  templateUrl: './my-feature.component.html',
})
export class MyFeatureComponent {
  public heroes: Observable<Hero[]>;

  constructor(private apiSvc: ApiService) {
    this.heroes = this.apiSvc.getData().pipe(
      tap((x) => {
        console.log('tap', x);
      })
    );
  }
}
