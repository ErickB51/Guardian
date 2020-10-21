import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss'],
})

export class EventModalComponent implements OnInit {
    
  public data = new Date();
  
  public inicioData:Date;
  public fimData:Date;
  
  public newTaskName = 'Teste';
  public allDay = false;

  constructor(private modalController : ModalController, private accountService: AccountService) {}

  ngOnInit() {} 

  public closeModal(){
    this.modalController.dismiss();
  }

  public addTask(){
    //this.accountService.createRandomEvents();
    this.accountService.criarEvento(this.newTaskName,this.inicioData,this.fimData,this.allDay);
    this.closeModal();
  }

  public minDataFormatada(){
    var gambiarra:number = this.data.getUTCMonth()+1;  
      
    var dia = '';
    var mes = '';
    var ano = this.data.getUTCFullYear();
    
    if(this.data.getUTCDate() < 10){
        dia = '0' + this.data.getUTCDate();
    }else{
        dia = ''+this.data.getUTCDate();
    }
    
    if(gambiarra < 10){
        mes = '0' + gambiarra;
    }else{
        mes = ''+gambiarra;
    }
    
    return '' + this.data.getUTCFullYear() + '-' + mes + '-' + dia;
    
  }

  public maxDataFormatada(ano: number){
      
    var dia = '';
    var mes = '';
    var ano:number = this.data.getUTCFullYear()+ano;
    
    if(this.data.getUTCDate() < 10){
        dia = '0' + this.data.getUTCDate();
    }else{
        dia = ''+this.data.getUTCDate();
    }
    
    if(this.data.getUTCMonth() < 10){
        mes = '0' + this.data.getUTCMonth();
    }else{
        mes = ''+this.data.getUTCMonth();
    }
    
    return '' + ano + '-' + mes + '-' + dia;
    
  }
  

}
