import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'project-input-validation-container',
  templateUrl: './input-validation.component.html'
})
export class InputValidationComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string

  input: any

  @ContentChild(NgModel, {static: false}) model: NgModel

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel')
    }
  }

  hasSuccess(): boolean{
    return  this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

}
