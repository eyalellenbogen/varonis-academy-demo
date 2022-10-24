import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from '../api.service';
import { API_URL_TOKEN, URL_GENERATOR_TOKEN } from '../tokens';
import { MyFeatureComponent } from './my-feature.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { ListComponent } from '../list/list.component';

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
  declarations: [MyFeatureComponent, HeroListComponent, HeroListComponent],
})
export class FeatureModule {}
