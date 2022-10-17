import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  styles: [':host{display:block}'],
  template: `item - <ng-content></ng-content>`,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {}
