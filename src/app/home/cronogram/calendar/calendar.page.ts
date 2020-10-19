import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { EventModalComponent } from '../../../components/event-modal/event-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  //Lista de eventos
  eventSource = [];

  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private modalController: ModalController) {}

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

  createEvent(titulo: string, guardiao: string, data: Date, inicio: number, final: number, diaTodo: boolean){
    this.eventSource.push({
                title: titulo,
                startTime: inicio,
                endTime: final,
                allDay: diaTodo,
                guardian: guardiao
            });
  }

  removeEvents() {
    this.eventSource = [];
  }


  public async showModal(){
    
    const modal = await this.modalController.create({
        component: EventModalComponent
    });
    modal.present();

  }


}
