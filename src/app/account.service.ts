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
    {tipo: 'Personal', xp: 0, selecionado: false, visual: 'Amarelao' },
    {tipo: 'Mentor', xp: 0, selecionado: false, visual: 'Verdao' },
    {tipo: 'Dieta,', xp: 0, selecionado: false, visual: 'Cinzao' },
    {tipo: 'Produtividade', xp: 0, selecionado: false, visual: 'Vermelhao' }
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

}
