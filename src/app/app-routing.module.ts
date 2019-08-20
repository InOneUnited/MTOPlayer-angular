import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicRoutes } from './modules/music/music-routing.module';
import { ProfileRoutes } from './modules/profile/profile-routing.module';
import { AuthGuard } from './modules/shared/services/guards/auth.guard';
import { UnsavedChangesGuard } from './modules/shared/services/guards/unsaved-changes.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    children: ProfileRoutes,
    canActivate: [AuthGuard],
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: 'music',
    children: MusicRoutes,
    canActivate: [AuthGuard],
    canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: '**',
    redirectTo: 'music'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
