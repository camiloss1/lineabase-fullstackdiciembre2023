import { Component, OnInit } from '@angular/core';
import { Eventusecase } from '../../../domain/usecases/eventusecase';
import { Event, Events } from '../../../domain/models/Event/event';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private _eventsUseCase: Eventusecase) { }
  events: Event[] = [];
  ngOnInit(): void {
    this.getAllEvents('1');
  }

  async getAllEvents(category: string) {
    this.events = await this._eventsUseCase.getAllEvents(category);
  }

}
