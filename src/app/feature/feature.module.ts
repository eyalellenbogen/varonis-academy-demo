import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from '../api.service';
import { API_URL_TOKEN, URL_GENERATOR_TOKEN } from '../tokens';
import { urlFactory } from '../url-factory';
import { MyFeatureComponent } from './my-feature.component';

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
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    ApiService,
    { provide: URL_GENERATOR_TOKEN, useValue: true },
    {
      provide: API_URL_TOKEN,
      useFactory: urlFactory,
      deps: [URL_GENERATOR_TOKEN],
    },
  ],
  declarations: [MyFeatureComponent],
})
export class FeatureModule {}
