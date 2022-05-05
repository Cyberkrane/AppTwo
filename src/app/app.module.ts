import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { GiftModule } from './gift/gift.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // from angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //from me
    SharedModule,
    GiftModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
