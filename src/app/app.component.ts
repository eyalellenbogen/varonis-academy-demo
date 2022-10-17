import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  Type,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'marvel-heroes';

  public items = this.api.getData();
  public someText = 'some text';

  constructor(private api: ApiService) {}
}
