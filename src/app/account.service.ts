import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  public validaPassagem = false;
  public nome = '';
  public moedas = 0;
  public conquistas = [];
  public configuracoes = [];
  public visuais = [];
  public guardioes = [];
  public tarefas = [];

  constructor(private router: Router, public storage: Storage) {
      this.storage.get('firstTime').then(result=>{
          if(result){
            this.storage.get('nome').then(result=>{
                this.nome = result;
            });
            this.storage.get('moedas').then(result=>{
                this.moedas = result;
            });
            this.storage.get('conquistas').then(result=>{
                this.conquistas = result;
            });
            this.storage.get('configuracoes').then(result=>{
                this.configuracoes = result;
            });
            this.storage.get('visuais').then(result=>{
                this.visuais = result;
            });
            this.storage.get('guardioes').then(result=>{
                this.guardioes = result;
            });
            this.storage.get('tarefas').then(result=>{
                this.tarefas = result;
            });
          }
      });
  }
  
  escolherGuardiao(tipoSelecionado: string){
    this.storage.get('nome').then(result=>{
          this.nome = result;
    });
    this.storage.get('moedas').then(result=>{
        this.moedas = result;
    });
    this.storage.get('conquistas').then(result=>{
        this.conquistas = result;
    });
    this.storage.get('configuracoes').then(result=>{
        this.configuracoes = result;
    });
    this.storage.get('visuais').then(result=>{
        this.visuais = result;
    });
    this.storage.get('guardioes').then(result=>{
        this.guardioes = result;
        for(var i=0; i<this.guardioes.length; i++){
            if(this.guardioes[i].tipo === tipoSelecionado){
                this.guardioes[i].selecionado = true;
                console.log(this.guardioes[i].tipo + " " + this.guardioes[i].selecionado);
                this.storage.set('guardioes',this.guardioes);
                this.storage.set('firstTime',true);
            }
        }
    });
    this.storage.get('tarefas').then(result=>{
        this.tarefas = result;
    });
    
    this.router.navigate(['/home/cronogram/']);
  }

  verXPGuardiaoEquipado(){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].selecionado){
            return this.guardioes[i].xp;
        }
    }
    return 0;
  }

  verXPGuardiao(guardiao: string){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].tipo === guardiao){
            return this.guardioes[i].xp;
        }
    }
    return 0;
  }

  verLvlGuardiao(guardiao: string){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].tipo === guardiao){
            return this.guardioes[i].lvl;
        }
    }
    return 0;
  }

  verConquistas(){
    var temp = 0;
    for(var i=0; i<this.conquistas.length; i++){
        if(this.conquistas[i].progresso == 1.0){
            temp += 1;
        }
    }
    return temp;
  }

  verificaVisual(visual: string){
    for(var i=0; i<this.visuais.length; i++){
        if(this.visuais[i].nome === visual){
            return true;
        }
    }
    return false;
  }

  comprarVisual(visual: string, valor: number){
    if(!this.verificaVisual(visual)){
        if(this.moedas > valor){
            this.moedas = this.moedas - valor;
            this.visuais.push({nome: visual, equipado: false});
            this.atualizarConquistas(2);
            this.storage.set('visuais',this.visuais);
            this.storage.set('conquistas',this.conquistas);
            return 'Comprado com Sucesso!';
        }else{
            return 'Sem dinheiro para comprar!';
        }
    }else{
        return 'Voce ja tem este visual!';
    }
  }

  atualizarConquistas(tipo: number){
    for(var i=0; i<this.conquistas.length; i++){
        if(this.conquistas[i].tipo == tipo){
            if(this.conquistas[i].progresso < 1.0){
                this.conquistas[i].progresso += 1/this.conquistas[i].tarefas;
            }
        }
    }
  }

  verificarGuardiao(guardiao: string){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].tipo === guardiao){
            if(this.guardioes[i].selecionado){
                return true;
            }
        }
    }
    return false;
  }
  
  verGuardiaoEquipado(){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].selecionado){
            return this.guardioes[i].tipo;
        }
    }
    return false;
  }

  reescolherGuardiao(guardiao: string){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].tipo === guardiao){
            this.guardioes[i].selecionado = true;
        }else{
            this.guardioes[i].selecionado = false;
        }
    }
    this.storage.set('guardioes',this.guardioes);
  }
  
  criarEvento(title: string, desc: string, startTime: Date, endTime: Date, allDay: boolean){
      this.tarefas.push({title: title, desc: desc, startTime: startTime,endTime: endTime, allDay: allDay});
      this.storage.set('tarefas',this.tarefas);
  }
    
}
