import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { ApiService, Hero } from '../api.service';
import { MyFeatureComponent } from './my-feature.component';

@Component({
  template: `<my-feature></my-feature>`,
})
class HostComponent {}

const heroes$ = new BehaviorSubject<Hero[]>([]);
const apiMock = {
  getData: () => {
    return heroes$;
  },
};

xdescribe('my component', () => {
  let component: MyFeatureComponent;
  let fixture: ComponentFixture<HostComponent>;
  let componentElement: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      providers: [{ provide: ApiService, useValue: apiMock }],
      declarations: [HostComponent, MyFeatureComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.debugElement.query(
      By.directive(MyFeatureComponent)
    ).componentInstance;

    componentElement = (fixture.nativeElement as HTMLElement).querySelector(
      'my-feature'
    ) as HTMLElement;
  });

  it('should work', () => {
    expect(component).toBeDefined();
  });

  describe('when no data', () => {
    beforeEach(() => {
      heroes$.next([]);
      fixture.detectChanges();
    });
    it('should have no items', () => {
      const items = componentElement.querySelectorAll('.item');
      expect(items.length).toBe(0);
    });
  });

  describe('when has data', () => {
    beforeEach(() => {
      heroes$.next([{ heroName: 'asd', name: 'lalal', imageUrl: '' }]);
      fixture.detectChanges();
    });
    it('should have items', () => {
      const items = componentElement.querySelectorAll('.item');
      expect(items.length).toBe(1);
    });
  });
});
