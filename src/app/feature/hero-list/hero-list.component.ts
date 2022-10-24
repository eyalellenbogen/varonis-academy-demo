import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { delay, Subject } from 'rxjs';
import { Hero } from 'src/app/api.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent {
  @Input()
  public title: string = 'Title';

  @Input()
  public heroes: Hero[] | null | undefined = [];

  private _heroSelected = new Subject<Hero>();

  @Output()
  public heroSelected = this._heroSelected.pipe(delay(500));

  public selectHero(hero: Hero) {
    this._heroSelected.next(hero);
  }
}
