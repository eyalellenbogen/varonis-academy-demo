import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pretty',
  template: `--{{ text }}--`,
})
export class PrettyComponent {
  @Input() public text = '';
}
