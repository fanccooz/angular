import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FullLayoutComponent } from './containers';
import { AppRoutingModule } from './app-routing.module';

import {
  AppHeaderComponent,
  AppSidebarComponent,
  AppFooterComponent,
} from './components';

const APP_COMPONENTS = [
  AppHeaderComponent,
  AppSidebarComponent,
  AppFooterComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
