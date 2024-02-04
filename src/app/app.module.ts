import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersViewComponent } from './components/orders-view/orders-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimeNgModule } from './modules/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    OrdersViewComponent,
    NavbarComponent,
  ],
  imports: [
    PrimeNgModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
