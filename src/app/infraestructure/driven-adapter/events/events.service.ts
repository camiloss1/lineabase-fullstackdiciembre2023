import { Injectable } from '@angular/core';
import { EventGateway } from '../../../domain/models/Event/gateway/event-gateway';
import { Observable } from 'rxjs';
import { Events } from '../../../domain/models/Event/event';
import { GenericService } from '../../helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends EventGateway {
  constructor(private genericService: GenericService) {
    super();
  }
  private _url = 'http://localhost:3000'
  getAllEvents(category: string): Observable<Events> {
    return this.genericService.get<Events>(this._url, 'events', `category=${category}`);
  }
}
