import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
// import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { AppsComponent } from './components/apps/apps.component';
import { DataComponent } from './components/data/data.component';
import { PasswordComponent } from './components/password/password.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule
    // StoreModule.forFeature('profile', profileReducers),
    // EffectsModule.forFeature([])
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
