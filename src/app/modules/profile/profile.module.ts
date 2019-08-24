import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AppsComponent } from './components/apps/apps.component';
import { DataComponent } from './components/data/data.component';
import { PasswordComponent } from './components/password/password.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { UserEffects } from './store/effects/user.effects';
import { profileReducers } from './store/reducers/profile.reducers';
import { userReducer } from './store/reducers/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    StoreModule.forFeature('profile', profileReducers),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
    ProfileComponent,
    DataComponent,
    PasswordComponent,
    AppsComponent
  ],
  entryComponents: [],
  providers: [],
  exports: []
})
export class ProfileModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProfileModule,
      providers: [
        // ProfileService
      ]
    };
  }
}
