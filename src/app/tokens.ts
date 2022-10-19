import { InjectionToken } from '@angular/core';

const API_URL =
  'https://vr-academy-5c2d4-default-rtdb.firebaseio.com/avengers.json';

export const API_URL_TOKEN = new InjectionToken('api url token', {
  factory: () => API_URL,
});

export interface GeneratorService {
  isWorking: boolean;
}

export const URL_GENERATOR_TOKEN = new InjectionToken<GeneratorService>(
  'gene token'
);
