import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router) { }

  public nome = '';
  public moedas = 10000;
  
  public conquistas = [
    {titulo: 'Novato', tipo: 1, progresso: 0.0, tarefas: 1},
    {titulo: 'Aprendiz', tipo: 1, progresso: 0.0, tarefas: 7},
    {titulo: 'Guerreiro', tipo: 1, progresso: 0.0, tarefas: 15},
    {titulo: 'Persistente', tipo: 1, progresso: 0.0, tarefas: 30},
    {titulo: 'Audacioso', tipo: 1, progresso: 0.0, tarefas: 90},
    {titulo: 'Praticamente uma Maquina', tipo: 1, progresso: 0.0, tarefas: 365},
    {titulo: 'Chique', tipo: 2, progresso: 0.0, tarefas: 1},
    {titulo: 'Refinado', tipo: 2,progresso: 0.0, tarefas: 5},
    {titulo: 'Aspirante da Moda', tipo: 2, progresso: 0.0, tarefas: 10},
    {titulo: 'Chavoso', tipo: 2, progresso: 0.0, tarefas: 15},
    {titulo: 'Estilo Unico', tipo: 2, progresso: 0.0, tarefas: 20},
    {titulo: 'Burgues', tipo: 2, progresso: 0.0, tarefas: 25}    
  ];

  public visuais = [
    {nome: 'Amarelao', equipado: true},
    {nome: 'Verdao', equipado: true},
    {nome: 'Cinzao', equipado: true},
    {nome: 'Vermelhao', equipado: true}
  ];

  public guardioes = [
    {tipo: 'Personal', xp: 0.0, selecionado: false, visual: 'Amarelao', lvl: 1},
    {tipo: 'Mentor', xp: 0.0, selecionado: false, visual: 'Verdao', lvl: 1},
    {tipo: 'Dieta', xp: 0.0, selecionado: false, visual: 'Cinzao', lvl: 1},
    {tipo: 'Produtividade', xp: 0.0, selecionado: false, visual: 'Vermelhao', lvl: 1}
  ];

  public tarefas = [];

  escolherGuardiao(tipoSelecionado: string){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].tipo === tipoSelecionado){
            this.guardioes[i].selecionado = true;
            console.log(this.guardioes[i].tipo + " " + this.guardioes[i].selecionado);
        }
    }
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
            console.log('Comprado com sucesso');
            this.atualizarConquistas(2);
            return 'Comprado com Sucesso!';
        }else{
            console.log('Sem dinheiro');
            return 'Sem dinheiro para comprar!';
        }
    }else{
        console.log('Voce ja tem este visual');
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

  reescolherGuardiao(guardiao: string){
    for(var i=0; i<this.guardioes.length; i++){
        if(this.guardioes[i].tipo === guardiao){
            this.guardioes[i].selecionado = true;
        }else{
            this.guardioes[i].selecionado = false;
        }
    }
  }

  createRandomEvents() {

    var events = [];

    for (var i = 0; i < 50; i += 1) {

        var date = new Date();
        var eventType = Math.floor(Math.random() * 2);
        var startDay = Math.floor(Math.random() * 90) - 45;
        var endDay = Math.floor(Math.random() * 2) + startDay;
        var startTime;
        var endTime;
        if (eventType === 0) {
            startTime = new Date(
              Date.UTC(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate() + startDay));
            if (endDay === startDay) {
                endDay += 1;
            }
            endTime = new Date(
              Date.UTC(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate() + endDay));
            events.push({
                title: 'All Day - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: true
            });
        } else {
            var startMinute = Math.floor(Math.random() * 24 * 60);
            var endMinute = Math.floor(Math.random() * 180) + startMinute;
            startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
            endTime = new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate() + endDay,
              0,
              date.getMinutes() + endMinute
            );
            events.push({
                title: 'Event - ' + i,
                startTime: startTime,
                endTime: endTime,
                allDay: false
            });
        }
    }
    this.tarefas = events;
  }

}
