import { Injectable } from '@angular/core';
import { delay, of, switchMap, timer } from 'rxjs';

const arr = [{ name: 'Eyal' }, { name: 'Inbal' }, { name: 'Tal' }];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  getData() {
    return timer(1000, 1000).pipe(
      switchMap(() => {
        arr.push({ name: 'moshe' + Math.random() });
        return of([...arr]);
      })
    );
  }
}
