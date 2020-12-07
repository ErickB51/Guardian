import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, ToastController } from '@ionic/angular';
import { Visual, AccountService } from '../../../account.service';
import { filter, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-guardians',
  templateUrl: './guardians.page.html',
  styleUrls: ['./guardians.page.scss'],
})
export class GuardiansPage implements OnInit {
  
  @ViewChild('#selectPersonal') selectPersonal: IonSelect;
  @ViewChild('#selectMentor') selectMentor: IonSelect;
  @ViewChild('#selectDieta') selectDieta: IonSelect;
  @ViewChild('#selectProdutividade') selectProdutividade: IonSelect;
  
  public hidePersonal;
  public hideMentor;
  public hideDieta;
  public hideProdutividade;
    
  public visuais = [];
  
  public visualEscolhidoPersonal = '';
  public visualEscolhidoMentor = '';
  public visualEscolhidoDieta = '';
  public visualEscolhidoProdutividade = '';
  
  public srcPersonal = '';
  public srcMentor = '';
  public srcDieta = '';
  public srcProdutividade = '';
  
  constructor(public accountService : AccountService, private toastController: ToastController) {
      this.accountService.storage.get('guardioes').then(result=>{
          this.accountService.storage.get('visuais').then(r=>{
              for(var i=0; i<r.length; i++){
                if(r[i].nome === result[0].visual){
                    this.srcPersonal = r[i].href;
                    console.log(this.srcPersonal);
                }
                if(r[i].nome === result[1].visual){
                    this.srcMentor = r[i].href;
                    console.log(this.srcMentor);
                }
                if(r[i].nome === result[2].visual){
                    this.srcDieta = r[i].href;
                    console.log(this.srcDieta);
                }
                if(r[i].nome === result[3].visual){
                    this.srcProdutividade = r[i].href;
                    console.log(this.srcProdutividade);
                }
              }
          });
      });   
  }

  ngOnInit() {}
  
  public async presentToast(message: string, duration: number){
      const toast = await this.toastController.create({
          message: message,
          duration: duration
      });
      await toast.present();
  }
  
  fecharSelecao(aberto: string){
      switch(aberto){
          case 'Personal':
            this.hidePersonal = true;
            break;
          case 'Mentor':
            this.hideMentor = true;
            break;
          case 'Dieta':
            this.hideDieta = true;
            break;
          case 'Produtividade':
            this.hideProdutividade = true;
            break;
          default:
            console.log('Deu ruim aqui!');
            break;
      }
      this.presentToast('Voce nao possui visuais!',1000);
  }
  
  visuaisDisponiveis(aberto: string){
      this.hidePersonal = false;
      this.hideMentor = false;
      this.hideDieta = false;
      this.hideProdutividade = false;
      var count:number = 0;
      this.visuais = [];
      console.log('[*] Iniciou... ');
      console.log('[*] Length -> '+this.accountService.visuais.length);
      for(var i=0; i<this.accountService.visuais.length; i++){
          console.log('[*] Para adicionar -> '+this.accountService.visuais[i].nome);
          if(!this.accountService.visuais[i].equipado){
              this.visuais.push(this.accountService.visuais[i]);
              console.log('[*] Adicionado -> '+this.visuais[count]);
              count += 1;
          }
      }
      if(this.visuais.length < 1){
          this.fecharSelecao(aberto);
      }
  }
  
  atualizarVisual(guardiao: string, btn: number){
    
    for(var i=0; i<this.accountService.guardioes.length; i++){
        if(this.accountService.guardioes[i].tipo === guardiao){
            switch(btn){
                case 0:
                    this.accountService.guardioes[i].visual = this.visualEscolhidoPersonal;
                    break;
                case 1:
                    this.accountService.guardioes[i].visual = this.visualEscolhidoMentor;
                    break;
                case 2:
                    this.accountService.guardioes[i].visual = this.visualEscolhidoDieta;
                    break;
                case 3:
                    this.accountService.guardioes[i].visual = this.visualEscolhidoProdutividade;
                    break;
                default:
                    console.log('Deu ruim aqui!');
                    break;
            }
            switch(guardiao){
                case 'Personal':
                    this.srcPersonal = this.accountService.visuais[this.accountService.guardioes[i].visual].href;
                    break;
                case 'Mentor':
                    this.srcMentor = this.accountService.visuais[this.accountService.guardioes[i].visual].href;
                    break;
                case 'Dieta':
                    this.srcDieta = this.accountService.visuais[this.accountService.guardioes[i].visual].href;
                    break;
                case 'Produtividade':
                    this.srcProdutividade = this.accountService.visuais[this.accountService.guardioes[i].visual].href;
                    break;
                default:
                    console.log('Deu ruim aqui!');
                    break;
            }
        }
    }
    
    for(var i=0; i<this.accountService.visuais.length; i++){
        if(i == btn){
            this.accountService.visuais[i].equipado = true;
        }else{
            this.accountService.visuais[i].equipado = false;
        }
    }
    
    this.accountService.storage.set('visuais',this.accountService.visuais);
    this.accountService.storage.set('guardioes',this.accountService.guardioes);
  }

}
