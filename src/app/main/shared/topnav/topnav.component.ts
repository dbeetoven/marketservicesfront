import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router/router';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';



@Component({
  selector: 'ms-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  providers: []
})
export class TopnavComponent implements OnInit {

  public isLoggedIn;
  private email: string;


  constructor(private router: Router,) {
    this.email = 'beetovenson@hotmail.com';

  }

  loggout() {
    // this.authenticate.logout().then(
    //   () => {
    //     console.dir('loggout...');
    //   }
    // );
  }

  ngOnInit() {
    // this.isLoggedIn = this.authenticate.getUserStatus();
  }


  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
  }
  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

}