import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-new-event-modal',
  templateUrl: './new-event-modal.page.html',
  styleUrls: ['./new-event-modal.page.scss'],
})
export class NewEventModalPage implements OnInit {
  
  public passou = false;  
    
  public minData = this.minDataFormatada();
  public maxData = this.maxDataFormatada(25);
  
  public inicioData = '';
  
  public horarioInicio = '';
  public horarioFim = '';
  
  public newTaskName = '';
  public newTaskDescription = '';
  public allDay = false;

  constructor(private modalController : ModalController, private accountService: AccountService, private toastController: ToastController) {}

  ngOnInit() {} 

  public async presentToast(message: string, duration: number){
      const toast = await this.toastController.create({
          message: message,
          duration: duration
      });
      await toast.present();
  }

  public closeModal(situacao: string){
        this.modalController.dismiss(situacao);
  }

  public addTask(){ 
    if(this.checkFields()){
        if(this.allDay){
            this.accountService.criarEvento(this.accountService.verGuardiaoEquipado()+'-> '+this.newTaskName,this.newTaskDescription,new Date(this.inicioData.split('T')[0]+'T00:00:00.000Z'),new Date(this.inicioData.split('T')[0]+'T23:59:59.999Z'),this.allDay);
        }else{
            this.accountService.criarEvento(this.accountService.verGuardiaoEquipado()+'-> '+this.newTaskName,this.newTaskDescription,new Date(this.inicioData.split('T')[0]+'T'+this.horarioInicio.split('T')[1]),new Date(this.inicioData.split('T')[0]+'T'+this.horarioFim.split('T')[1]),this.allDay);
        }
        
        this.closeModal('Ok');
    }else{
        this.presentToast('Preencha os campos corretamente!',2000);
    }
    
  }

  public minDataFormatada(){  
      
    var data:Date = new Date();
      
    var dia = '';
    var mes = '';
    var ano = data.getFullYear();
    
    if(data.getDate() < 10){
        dia = '0' + data.getDate();
    }else{
        dia = ''+data.getDate();
    }
    
    if((data.getMonth()+1) < 10){
        mes = '0' + (data.getMonth()+1);
    }else{
        mes = ''+(data.getMonth()+1);
    }
    
    return '' + ano + '-' + mes + '-' + dia;
    
  }

  public maxDataFormatada(ano: number){
      
    var data:Date = new Date();
      
    var dia = '';
    var mes = '';
    var ano:number = data.getFullYear()+ano;
    
    if(data.getDate() < 10){
        dia = '0' + data.getDate();
    }else{
        dia = ''+data.getDate();
    }
    
    if(data.getMonth() < 10){
        mes = '0' + data.getMonth();
    }else{
        mes = ''+data.getMonth();
    }
    
    return '' + ano + '-' + mes + '-' + dia;
    
  }
  
  public validateAndRemoveSpaces(){
      var tempTaskName = '';
      var tempTaskDescription = '';
      
      for(var i=0; i<this.newTaskName.length; i++){
          if(Number(this.newTaskName.charCodeAt(i)) > 64 && Number(this.newTaskName.charCodeAt(i)) < 91 || Number(this.newTaskName.charCodeAt(i)) > 96 && Number(this.newTaskName.charCodeAt(i)) < 123){

              tempTaskName += this.newTaskName.charAt(i);
              
          }
      }
      
      for(var i=0; i<this.newTaskDescription.length; i++){
          if(Number(this.newTaskDescription.charCodeAt(i)) > 64 && Number(this.newTaskDescription.charCodeAt(i)) < 91 || Number(this.newTaskDescription.charCodeAt(i)) > 96 && Number(this.newTaskDescription.charCodeAt(i)) < 123){
              
              tempTaskDescription += this.newTaskDescription.charAt(i);
              
          }
      }
      
      return {newTaskName: tempTaskName, newTaskDescription: tempTaskDescription};
  }
  
  public checkFields(){
      
      var tempInputs = [];
      tempInputs.push(this.validateAndRemoveSpaces());
      
      if(!(tempInputs[0].newTaskName === '')){
            if(!(tempInputs[0].newTaskDescription === '') && !(this.inicioData === '')){
              if(this.allDay){
                  return true
              }else{
                  var tI:Date = new Date(this.horarioInicio);
                  var tF:Date = new Date(this.horarioFim);
                  if(!(this.horarioInicio === '') && !(this.horarioFim === '') && tI <= tF){
                      return true
                  }else{
                      return false;
                  }
              }
          }else{
              return false;
          }
      }else{
          return false;
      }
      
  }
  
  public atualizarData(reset: string){
      
      this.passou = false;
      
      this.minData = this.minDataFormatada();
      this.maxData = this.maxDataFormatada(25);
      
      //Caso a data seja alterada então os campos são resetados
      if(reset === 'Data'){
          this.horarioInicio = '';
          this.horarioFim = '';
      }
      
      //Caso o horário de inicio seja alterado então o campo de término é resetado
      if(reset === 'Horario'){
          this.horarioFim = '';
      }
      
      console.log(this.inicioData);
      console.log(this.horarioInicio);
      console.log(this.horarioFim);
      
  }
  
  public formatarData(){
    //Continuar aqui formatando data para valores minimos dinamicos
    if(!this.passou){
        if(!(this.inicioData.split('T')[0] === this.minDataFormatada())){
            this.inicioData = this.inicioData.split('T')[0]+'T'+'00:00:00.000-03:00';
        }else{
            var data:Date = new Date;
            this.inicioData = this.inicioData.split('T')[0]+'T'+formatarHoras(data.getHours())+':'+formatarMinutos(data.getMinutes())+':'formatarSegundos(data.getSeconds())+'.'+formatarMilisegundso(data.getMilliseconds());
        }
        console.log(this.inicioData);
        console.log(this.horarioInicio);
        console.log(this.horarioFim);
        this.passou = true
    }
  }
        
  public formatarHoras(horas: number){
    if(horas<10){
        return '0'+horas;
    }
    return horas;
      
  }
  
  public formatarMinutos(minutos: number){
    if(minutos < 10){
        return '0'+minutos;
    }
    return minutos;
  }
  
  public formatarSegundos(segundos: number){
      if(segundos < 10){
          return '0'+segundos;
      }
      return segundos;
  }
  
  public formatarMilisegundos(milisegundos: number){
      if(milisegundos < 10){
          return '00'+milisegundos;
      }
      if(milisegundos < 100){
          return '0'+milisegundos;
      }
      return milisegundos;
  }
  
}

