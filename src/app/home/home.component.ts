import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Pipe,
  PipeTransform,
  QueryList,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { ApiService } from '../api.service';

@Pipe({ name: 'nullToUndefined' })
export class nullToUndefined implements PipeTransform {
  transform<T>(value: T | null) {
    if (value === null) {
      return undefined;
    }
    return value;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public heroes = this.api.getData();
  constructor(private api: ApiService) {}
}
