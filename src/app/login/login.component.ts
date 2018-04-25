import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  ngOnInit(): void {
    console.log($('#login-bag'));
  }
}
