import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Subject, take } from 'rxjs';
import { ApiService, Hero } from './api.service';
import { API_URL_TOKEN } from './tokens';

const apiUrl = 'http://lalalalala';

const httpClientMock = {
  get: () => {},
};

const mockResponse: Hero[] = [];

const heroesSubject = new Subject<Hero[]>();

describe('ApiService', () => {
  let svc: ApiService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: API_URL_TOKEN, useValue: apiUrl },
        { provide: HttpClient, useValue: httpClientMock },
      ],
    });
    svc = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
    spyOn(httpClient, 'get').and.returnValue(heroesSubject);
  });

  describe('getData', () => {
    it('should return result', () => {
      svc
        .getData()
        .pipe(take(1))
        .subscribe((result) => {
          expect(result).toBe(mockResponse);
        });
      heroesSubject.next(mockResponse);
    });
    it('should use correct URL', () => {
      svc
        .getData()
        .pipe(take(1))
        .subscribe((result) => {
          expect(httpClient.get).toHaveBeenCalledWith(apiUrl);
        });
      heroesSubject.next([]);
    });
  });
});
