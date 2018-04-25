import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      }
    ]),
  ],
  declarations: [],
  exports: [
    FormsModule,
    RouterModule
  ],
  providers: []
})
export class LoginRoutingModule {
}
