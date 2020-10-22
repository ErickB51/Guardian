import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './new-event-modal.page.html',
  styleUrls: ['./new-event-modal.page.scss'],
})
export class NewEventModalPage implements OnInit {
   
  public data = new Date();
  
  public inicioData = '';
  
  public horarioInicio = '';
  public horarioFim = '';
  
  public newTaskName = '';
  public allDay = false;

  constructor(private modalController : ModalController, private accountService: AccountService) {}

  ngOnInit() {} 

  public closeModal(){
    this.modalController.dismiss();
  }

  public addTask(){ 
    
    console.log(this.allDay);
    
    if(this.allDay){
        this.accountService.criarEvento(this.accountService.verGuardiaoEquipado()+'-> '+this.newTaskName,new Date(this.inicioData.split('T')[0]),new Date(this.inicioData.split('T')[0]),this.allDay);
    }else{    
        this.accountService.criarEvento(this.accountService.verGuardiaoEquipado()+'-> '+this.newTaskName,new Date(this.inicioData.split('T')[0]+'T'+this.horarioInicio.split('T')[1]),new Date(this.inicioData.split('T')[0]+'T'+this.horarioFim.split('T')[1]),this.allDay);
    }
    
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
