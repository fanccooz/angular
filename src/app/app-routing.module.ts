import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FullLayoutComponent} from './containers';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/bizbase/base.module#BaseModule',
        data: {
          preload: false
        }
      },
      {
        path: 'main',
        loadChildren: './views/main/main.module#MainModule',
        data: {
          preload: false
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
