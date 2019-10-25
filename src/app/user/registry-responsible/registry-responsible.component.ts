import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'project-registry-responsible',
  templateUrl: './registry-responsible.component.html'
})
export class RegistryResponsibleComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToRegister(){
    this.router.navigateByUrl('/register')
  }

  checkOrder(order: any){
    console.log(order) 
   }
  ngOnInit() {
  }

}
