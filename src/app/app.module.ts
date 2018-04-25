import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './containers';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {LoginRoutingModule} from './login/login.routing';

import {
  AppHeaderComponent,
  AppSidebarComponent,
  AppFooterComponent,
} from './components';

const APP_COMPONENTS = [
  AppHeaderComponent,
  AppSidebarComponent,
  AppFooterComponent
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FullLayoutComponent,
    ...APP_COMPONENTS
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
