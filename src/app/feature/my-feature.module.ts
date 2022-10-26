import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from '../api.service';
import { API_URL_TOKEN, URL_GENERATOR_TOKEN } from '../tokens';
import { MyFeatureComponent } from './my-feature.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { StoreModule } from '@ngrx/store';
import { herosReducer } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './state/effects';
import { MyFeatureProducer } from './my-feature.producer';
import { PrettifyPipe } from '../shared/prettify.pipe';
import { PrettyComponent } from './hero-list/pretty.component';
import { NoEyalValidatorDirective } from './validators/no-eyal.validator';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'child',
  },
  {
    path: 'child',
    component: MyFeatureComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('my', herosReducer),
    EffectsModule.forFeature([HeroesEffects]),
  ],
  providers: [MyFeatureProducer],
  declarations: [
    MyFeatureComponent,
    HeroListComponent,
    HeroListComponent,
    PrettifyPipe,
    PrettyComponent,
  ],
})
export class FeatureModule {}
