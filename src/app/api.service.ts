import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { API_URL_TOKEN } from './tokens';

export interface Hero {
  name: string;
  heroName: string;
  imageUrl: string;
}

let cnt = 1;

@Injectable()
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    @Inject(API_URL_TOKEN) private apiUrl: string
  ) {
    console.log('--- API service instantiated', cnt++);
  }

  getData() {
    return this.httpClient.get<Hero[]>(this.apiUrl);
  }
}
