import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { BehaviorSubject, take } from 'rxjs';
import { ApiService, Hero } from 'src/app/api.service';
import { getHeroesAction, recieveHeroesAction } from '../actions';
import { HeroesEffects } from '../effects';

const actions$ = new BehaviorSubject<Action>({} as Action);

const heroesMock: Hero[] = [
  { name: 'name', heroName: 'asdasd', imageUrl: 'asdsa' },
];

const heroes$ = new BehaviorSubject<Hero[]>([]);

const apiMock = {
  getData: () => {
    return heroes$;
  },
};

describe('Effect', () => {
  let effect: HeroesEffects;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroesEffects,
        { provide: Actions, useValue: actions$ },
        { provide: ApiService, useValue: apiMock },
      ],
    }).compileComponents();
    effect = TestBed.inject(HeroesEffects);
  });
  it('should exist', () => {
    expect(effect).toBeDefined();
  });

  describe('getHeroesAction', () => {
    beforeEach(() => {
      spyOn(apiMock, 'getData').and.callThrough();
      actions$.next(getHeroesAction());
    });
    it('should call api', () => {
      effect.getHeroes$.pipe(take(1)).subscribe();
      expect(apiMock.getData).toHaveBeenCalled();
    });

    describe('when data returns', () => {
      beforeEach(() => {
        heroes$.next(heroesMock);
      });
      it('should return another action', () => {
        effect.getHeroes$.pipe(take(1)).subscribe((res) => {
          const expected = recieveHeroesAction({ heroes: heroesMock });
          expect(res).toEqual(expected)
        });
      });
    });
  });
});
