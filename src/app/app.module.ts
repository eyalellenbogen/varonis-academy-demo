import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent, nullToUndefined } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HighlightDirective } from './shared/highlight.directive';
import { PrettifyPipe } from './shared/prettify.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { API_URL_TOKEN, GeneratorService, URL_GENERATOR_TOKEN } from './tokens';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NoEyalValidatorDirective } from './feature/validators/no-eyal.validator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HighlightDirective,
    nullToUndefined,
    NoEyalValidatorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [ApiService, { provide: URL_GENERATOR_TOKEN, useValue: false }],
  bootstrap: [AppComponent],
})
export class AppModule {}
