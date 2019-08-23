import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from './modules/shared/shared.module';
import { IndexFooterComponent } from './components/index/index-footer/index-footer/index-footer.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, IndexFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule.forRoot()
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule {}
