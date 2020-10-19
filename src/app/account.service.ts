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
    {titulo: '', habilitado: false}
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
        if(this.conquistas[i].habilitado){
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

}
