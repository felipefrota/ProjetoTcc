import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-registration-address',
  templateUrl: './registration-address.component.html'
})
export class RegistrationAddressComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToHome(){
    this.router.navigateByUrl(' ')
  }

  ngOnInit() {
  }

}
