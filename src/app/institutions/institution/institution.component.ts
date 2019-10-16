import { Component, OnInit, Input } from '@angular/core';

import {Institution} from './institution.model'

@Component({
  selector: 'project-institution',
  templateUrl: './institution.component.html'
})
export class InstitutionComponent implements OnInit {

  @Input() institution: Institution

  constructor() { }

  ngOnInit() {
  }

}
