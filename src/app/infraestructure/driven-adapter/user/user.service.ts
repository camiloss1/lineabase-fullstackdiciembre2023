import { Injectable } from '@angular/core';
import { GenericService } from '../../helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'http://localhost:3000'
  constructor(private genericService: GenericService) { }
}
