import { Component, OnInit } from '@angular/core';

import { Institution } from './institution/institution.model'
import { InstitutionsService } from './institutions.service';

@Component({
  selector: 'project-institutions',
  templateUrl: './institutions.component.html'
})
export class InstitutionsComponent implements OnInit {

   institutions: Institution[]

  constructor(private institutionsService: InstitutionsService) { }

  ngOnInit() {
    this.institutionsService.institutions().subscribe(institutions => this.institutions = institutions)
  }

}
