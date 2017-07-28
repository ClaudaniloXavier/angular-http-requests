import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SMNUIModule } from 'ng-smn-ui';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { CoreModule } from 'app/core/core.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    SMNUIModule,
    CoreModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
