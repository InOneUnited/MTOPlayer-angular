import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LibraryComponent } from "./library.component";

export const LibraryRoutes = [{ path: "home", component: LibraryComponent }];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
