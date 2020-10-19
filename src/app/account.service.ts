import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router) { }

  public nome = '';
  public moedas = 0;
  
  public conquistas = [
    {titulo: '', habilitado: false}
  ];

  public visuais = [
    {nome: 'Amarelao', equipado: false},
    {nome: 'Verdao', equipado: false},
    {nome: 'Cinzao', equipado: false},
    {nome: 'Vermelhao', equipado: false}
  ];

  public guardioes = [
    {tipo: 'Personal', xp: 0, selecionado: false},
    {tipo: 'Mentor', xp: 0, selecionado: false},
    {tipo: 'Dieta,', xp: 0, selecionado: false},
    {tipo: 'Produtividade', xp: 0, selecionado: false}
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

}
