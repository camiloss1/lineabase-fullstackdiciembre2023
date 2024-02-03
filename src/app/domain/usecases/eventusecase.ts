import { Injectable } from "@angular/core";
import { EventGateway } from "../models/Event/gateway/event-gateway";
import { Event } from "../models/Event/event";

@Injectable({
    providedIn: 'root'
})
export class Eventusecase {
    constructor(private _eventGateway: EventGateway) { }
    // toda la logica relacionada con eventos
    getAllEvents(category: string): any {
        var eventsWithLAstUpdate: Event[] = [];
        this._eventGateway.getAllEvents(category).subscribe((data: any) => {
            if (data) {
                data.events.forEach((event: Event) => {
                    var date = new Date();
                    var updatedAt = new Date(event.updatedAt);
                    var dateDifferenceMilliseconds = date.getTime() - updatedAt.getTime();
                    event.lastUpdate = Math.floor(dateDifferenceMilliseconds / (1000 * 60));
                    eventsWithLAstUpdate.push(event);
                });
            }
        });
        return eventsWithLAstUpdate;
    }
}
