import { Component, OnInit } from '@angular/core';

import { Institution } from './institution/institution.model'

@Component({
  selector: 'project-institutions',
  templateUrl: './institutions.component.html'
})
export class InstitutionsComponent implements OnInit {

  institution: Institution[] = [
    {
        id: "casa-nova",
        name: "Casa Nova",
        category: "Usuarios e Depressao",
        imagePath: "assets/Images/Adobe-AfterEffects-icon.png",
        hours: "Funciona de segunda a sexta, de 8h as 23h"
    },
    {
        id: "vida-nova",
        name: "Vida Nova",
        category: "Usuarios e Depressao",
        imagePath: "assets/Images/Adobe-Audition-icon.png",
        hours: "Funciona de segunda a segunda, de 8h as 23h"
    }]

  constructor() { }

  ngOnInit() {
  }

}
