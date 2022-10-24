import { Component } from '@angular/core';
import { Hero } from 'src/app/api.service';
import { TestContextBuilder } from '@varonis-webcore/web-test-infra/lib/angular-jasmine';

import { HeroListComponent } from './hero-list.component';
import { HeroListPageObject } from './hero-list.po';
import { fakeAsync, flush, flushMicrotasks, tick } from '@angular/core/testing';

@Component({
  template: `<app-hero-list
    [title]="title"
    [heroes]="heroes"
    (heroSelected)="onHeroSelected($event)"
  ></app-hero-list>`,
})
class HostComponent {
  title = '';
  heroes: Hero[] = [];
  onHeroSelected(hero: Hero) {}
}

fdescribe('Hero List', () => {
  const ctx = TestContextBuilder.create(HostComponent)
    .withComponent(HeroListComponent)
    .withPageObject(HeroListPageObject)
    .build();

  beforeEach(() => {
    ctx.bootstrap();
  });

  it('should create', () => {
    expect(ctx.component).toBeDefined();
  });

  describe('title', () => {
    const title = 'my title';
    beforeEach(() => {
      ctx.setHostProp({ title });
    });
    it('should display title', () => {
      expect(ctx.pageObject.title?.innerText).toBe(title);
    });
  });

  describe('heroes', () => {
    const heroes: Hero[] = [
      { name: 'lala', heroName: 'looloo', imageUrl: 'theImage' },
      { name: 'lala2', heroName: 'looloo2', imageUrl: 'theImage2' },
    ];

    beforeEach(() => {
      ctx.setHostProp({ heroes });
    });
    it('should populate heroes', () => {
      expect(ctx.pageObject.heroes.length).toBe(heroes.length);
    });
    it('should show name', () => {
      expect(ctx.pageObject.heroes[0].label?.innerText).toBe(heroes[0].name);
    });

    describe('when hero clicked', () => {
      beforeEach(() => {
        spyOn(ctx.host, 'onHeroSelected');
      });
      it('should emit event', fakeAsync(() => {
        ctx.pageObject.heroes[1].click();
        tick(499);
        expect(ctx.host.onHeroSelected).not.toHaveBeenCalled();
        tick(1);
        expect(ctx.host.onHeroSelected).toHaveBeenCalledWith(heroes[1]);
      }));
    });
  });
});
