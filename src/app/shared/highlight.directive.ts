import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @Input('highlight')
  public phrase: string = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    if (this.el.nativeElement.textContent?.includes(this.phrase)) {
      this.el.nativeElement.classList.add('highlight');
    }
  }
}
