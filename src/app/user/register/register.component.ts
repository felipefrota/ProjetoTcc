import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToRegistrationAddress(){
    this.router.navigateByUrl('/registration-address')
  }

  ngOnInit() {
  }

}
