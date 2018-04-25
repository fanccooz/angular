import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseComponent} from './base.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'base',
        component: BaseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {
}
