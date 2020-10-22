import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { NewEventModalPage } from '../../../components/new-event-modal/new-event-modal.page';
import { ModalController } from '@ionic/angular';
import { AccountService } from '../../../account.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  viewTitle: string;

  calendar = {
    formatWeekTitle: "MMMM yyyy, 'Semana' w",
    noEventsLabel: "Sem eventos",
    allDayLabel: "Dia",
    mode: 'month',
    currentDate: new Date()
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private modalController: ModalController, private accountService: AccountService) {}

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

  removeEvents() {
    this.accountService.tarefas = [];
  }

  public async showModal(){
    
    const modal = await this.modalController.create({
        component: NewEventModalPage,
        cssClass: 'new-event-modal'
    });
    
    await modal.present();
    
    modal.onDidDismiss().then((result) => {
        this.myCal.loadEvents();
    });
    
    return await modal.present();
    
  }


}
