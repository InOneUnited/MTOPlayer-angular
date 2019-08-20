import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
    // StoreModule.forFeature('profile', profileReducers),
    // EffectsModule.forFeature([])
  ],
  declarations: [ProfileComponent],
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
