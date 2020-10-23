import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { NewEventModalPage } from '../../../components/new-event-modal/new-event-modal.page';
import { ModalController, AlertController } from '@ionic/angular';
import { AccountService } from '../../../account.service';

import { formatDate } from '@angular/common'; 

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

  constructor(private modalController: ModalController, private accountService: AccountService, @Inject(LOCALE_ID) private locale: string, private alertController: AlertController) {}

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
  
  public async onEventSelected(event){
      let start = formatDate(event.startTime,'medium',this.locale);
      let end = formatDate(event.endTime,'medium',this.locale);
      
      let message = '';
      
      if(!event.allDay){
          message = 'Inicio: '+start+'<br><br>Termino: '+end;
      }else{
          message = 'Evento com duracao prevista para o dia inteiro';
      }
      
      const alert = await this.alertController.create({
          header: event.title.split('->')[1],
          subHeader: event.desc,
          message: message,
          buttons: ['OK']
      });
      alert.present();
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
    
  }


}
