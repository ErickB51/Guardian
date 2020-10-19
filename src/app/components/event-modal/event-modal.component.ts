import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})

export class EventModalComponent implements OnInit {

  public newTaskName = 'Teste';
  public allDay = false;
  public personal = false;
  public mentor = false;
  public dieta = false;
  public produtividade = false;

  constructor(private modalController : ModalController, private accountService: AccountService) { }

  ngOnInit() {}

  public closeModal(){
    this.modalController.dismiss();
  }

  public changeAllDay(){
    if(!this.allDay){
        this.allDay = true;
    }else{
        this.allDay = false;
    }
  }

  public checkAllDay(){
    return this.allDay;
  }

  public verificaGuardiaoSelecionadoModal(){
    for(var i=0; i<4;i++){
        switch(i){
            case 0:
                if(this.personal){
                    return 'Personal';
                }
                break;
            case 1:
                if(this.mentor){
                    return 'Mentor';
                }
                break;
            case 2:
                if(this.dieta){
                    return 'Dieta';
                }
                break;
            case 3:
                if(this.produtividade){
                    return 'Produtividade';
                }
                break;
            default:
                break;

        }
    }
  }

  public addTask(){
    this.accountService.createRandomEvents();
    /*
    this.accountService.novaTarefa(this.newTaskName, this.verificaGuardiaoSelecionadoModal(), this.startTime, this.endTime, this.allDay);
    console.log(this.newTaskName,this.allDay);
    */
    this.closeModal();
  }

}
