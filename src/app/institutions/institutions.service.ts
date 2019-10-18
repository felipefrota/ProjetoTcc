import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { CONNECTION_API } from '../app.api';
import { Institution } from './institution/institution.model';


@Injectable()
export class InstitutionsService {

        constructor( private http: HttpClient){}

        institutions(): Observable<Institution[]> {
            return this.http.get<Institution[]>(`${CONNECTION_API}/allCompanies`);
            
        }
    }

