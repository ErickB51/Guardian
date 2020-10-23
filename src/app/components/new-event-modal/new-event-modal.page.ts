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
  public newTaskDescription = '';
  public allDay = false;

  constructor(private modalController : ModalController, private accountService: AccountService) {}

  ngOnInit() {} 

  public closeModal(){
    this.modalController.dismiss();
  }

  public addTask(){ 
    
    if(this.allDay){
        this.accountService.criarEvento(this.accountService.verGuardiaoEquipado()+'-> '+this.newTaskName,this.newTaskDescription,new Date(this.inicioData.split('T')[0]+'T00:00:00.000-03:00'),new Date(this.inicioData.split('T')[0]+'T00:00:00.000-03:00'),this.allDay);
    }else{
        this.accountService.criarEvento(this.accountService.verGuardiaoEquipado()+'-> '+this.newTaskName,this.newTaskDescription,new Date(this.inicioData.split('T')[0]+'T'+this.horarioInicio.split('T')[1]),new Date(this.inicioData.split('T')[0]+'T'+this.horarioFim.split('T')[1]),this.allDay);
    }
    
    this.closeModal();
  }

  public minDataFormatada(){  
      
    var dia = '';
    var mes = '';
    var ano = this.data.getFullYear();
    
    if(this.data.getDate() < 10){
        dia = '0' + this.data.getDate();
    }else{
        dia = ''+this.data.getDate();
    }
    
    if((this.data.getMonth()+1) < 10){
        mes = '0' + (this.data.getMonth()+1);
    }else{
        mes = ''+(this.data.getMonth()+1);
    }
    
    return '' + ano + '-' + mes + '-' + dia;
    
  }

  public maxDataFormatada(ano: number){
      
    var dia = '';
    var mes = '';
    var ano:number = this.data.getFullYear()+ano;
    
    if(this.data.getDate() < 10){
        dia = '0' + this.data.getDate();
    }else{
        dia = ''+this.data.getDate();
    }
    
    if(this.data.getMonth() < 10){
        mes = '0' + this.data.getMonth();
    }else{
        mes = ''+this.data.getMonth();
    }
    
    return '' + ano + '-' + mes + '-' + dia;
    
  }
  
  public valoresDeHoras(){
      
      var actualHour = this.data.getHours();
      var horas = [];
      var tamanhoHoras = 24 - actualHour;
      
      for(var i=0; i<tamanhoHoras; i++){
        horas[i] = actualHour+i;
      }
      
      return horas;
  }
  
  public valoresDeMinutos(){
      
      var actualMinute = this.data.getMinutes();
      var minutos = [];
      var tamanhoMinutos = 60 - actualMinute;
      
      for(var i=0; i<tamanhoMinutos; i++){
          
          minutos[i] = actualMinute+i;
          
      }
      
      return minutos;
      
      
  }
  
}
