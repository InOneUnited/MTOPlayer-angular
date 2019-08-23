import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const ProfileRoutes = [{ path: '', component: ProfileComponent }];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
