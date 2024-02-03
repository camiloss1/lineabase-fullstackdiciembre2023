import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  id!: String;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const eventId = params.get('eventId');
      if (eventId) {
        this.id = eventId;
      }
    })
  }

}
