import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AppsComponent } from './components/apps/apps.component';
import { DataComponent } from './components/data/data.component';
import { PasswordComponent } from './components/password/password.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MusicAppsService } from './service/music-apps.service';
import { UserService } from './service/user.service';
import { MusicAppsEffects } from './store/effects/music-apps.effects';
import { UserEffects } from './store/effects/user.effects';
import {
  profileFeatureKey,
  profileReducers
} from './store/reducers/profile.reducer';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    StoreModule.forFeature(profileFeatureKey, profileReducers),
    EffectsModule.forFeature([UserEffects, MusicAppsEffects])
  ],
  declarations: [
    ProfileComponent,
    DataComponent,
    PasswordComponent,
    AppsComponent
  ],
  entryComponents: [DataComponent, PasswordComponent, AppsComponent],
  providers: [],
  exports: []
})
export class ProfileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProfileModule,
      providers: [UserService, MusicAppsService]
    };
  }
}
