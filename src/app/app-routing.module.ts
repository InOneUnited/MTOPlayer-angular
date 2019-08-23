import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { LibraryRoutes } from "./modules/library/library-routing.module";
import { ProfileRoutes } from "./modules/profile/profile-routing.module";
import { AuthGuard } from "./modules/shared/services/guards/auth.guard";
import { UnsavedChangesGuard } from "./modules/shared/services/guards/unsaved-changes.guard";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    pathMatch: "full"
    // canActivate: [AuthGuard]
  },
  {
    path: "profile",
    children: ProfileRoutes
    // canActivate: [AuthGuard],
    // canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: "library",
    children: LibraryRoutes
    // canActivate: [AuthGuard],
    // canDeactivate: [UnsavedChangesGuard]
  },
  {
    path: "**",
    redirectTo: "library"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
