import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileModule } from './modules/profile/profile.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from './modules/shared/shared.module';
import { AppEffects } from './store/app.effects';
import { appReducers } from './store/app.reducers';

@NgModule({
  declarations: [AppComponent, IndexComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule.forRoot(),
    ProfileModule.forRoot(),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {}
