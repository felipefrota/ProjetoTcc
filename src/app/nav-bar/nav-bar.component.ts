import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'project-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToRegister(){
    this.router.navigateByUrl('/register');
  }

  ngOnInit() {
  }

}
