import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StamService {
  getStuff() {
    return 'stuff';
  }
}
