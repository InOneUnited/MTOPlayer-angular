import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { AddAppDialogComponent } from './components/apps/add-app/add-app.component';
import { AppsElementComponent } from './components/apps/apps-element/apps-element.component';
import { AppsComponent } from './components/apps/apps.component';
import { DataComponent } from './components/data/data.component';
import { PasswordComponent } from './components/password/password.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MusicAppsService } from './service/music-apps.service';
import { UserService } from './service/user.service';
import { MusicAppsEffects } from './store/effects/music-apps.effects';
import { UserEffects } from './store/effects/user.effects';
import { profileFeatureKey, profileReducers } from './store/reducers/profile.reducer';
import { PasswordDataEffects } from './store/effects/password-data.effects';
import { PasswordDataService } from './service/password-data.service';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    NgSelectModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(profileFeatureKey, profileReducers),
    EffectsModule.forFeature([UserEffects, MusicAppsEffects, PasswordDataEffects])
  ],
  declarations: [
    AddAppDialogComponent,
    AppsComponent,
    AppsElementComponent,
    DataComponent,
    PasswordComponent,
    ProfileComponent
  ],
  entryComponents: [
    AddAppDialogComponent,
    AppsElementComponent,
    DataComponent,
    PasswordComponent,
    AppsComponent
  ],
  providers: [],
  exports: []
})
export class ProfileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProfileModule,
      providers: [UserService, MusicAppsService, PasswordDataService]
    };
  }
}
