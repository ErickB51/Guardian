import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor() {}

  ngOnInit() {}

  next() {
    this.myCal.slideNext();
  }

  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(
              Date.UTC(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(
              Date.UTC(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate() + endDay));
            events.push({
                title: 'All Day - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate() + endDay,
              0,
              date.getMinutes() + endMinute
            );
            events.push({
                title: 'Event - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
    }
    this.eventSource = events;
  }

  removeEvents() {
    this.eventSource = [];
  }
}
