import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../account.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
    public auth;
    
    constructor(private storage: Storage, private accountService: AccountService) {
       this.auth = false;
       this.storage.get('firstTime').then(result=>{
           if(!result){
               this.storage.set('nome','');
               this.storage.set('moedas',0);
               this.storage.set('conquistas',[{titulo: 'Novato', tipo: 1, progresso: 0.0, tarefas: 1},{titulo: 'Aprendiz', tipo: 1, progresso: 0.0, tarefas: 7},{titulo: 'Guerreiro', tipo: 1, progresso: 0.0, tarefas: 15},{titulo: 'Persistente', tipo: 1, progresso: 0.0, tarefas: 30},{titulo: 'Audacioso', tipo: 1, progresso: 0.0, tarefas: 90},{titulo: 'Praticamente uma Maquina', tipo: 1, progresso: 0.0, tarefas: 365},{titulo: 'Chique', tipo: 2, progresso: 0.0, tarefas: 1},{titulo: 'Refinado', tipo: 2,progresso: 0.0, tarefas: 5},{titulo: 'Aspirante da Moda', tipo: 2, progresso: 0.0, tarefas: 10},{titulo: 'Chavoso', tipo: 2, progresso: 0.0, tarefas: 15},{titulo: 'Estilo Unico', tipo: 2, progresso: 0.0, tarefas: 20},{titulo: 'Burgues', tipo: 2, progresso: 0.0, tarefas: 25}]);
               this.storage.set('configuracoes',[{val: "Vibracao", ativado: true},{val: "Efeitos Sonoros", ativado: true}]);
               this.storage.set('visuais',[{nome: 'Amarelao', equipado: true},{nome: 'Verdao', equipado: true},{nome: 'Cinzao', equipado: true},{nome: 'Vermelhao', equipado: true}]);
               this.storage.set('guardioes',[{tipo: 'Personal', xp: 0.0, selecionado: false, visual: 'Amarelao', lvl: 1},{tipo: 'Mentor', xp: 0.0, selecionado: false, visual: 'Verdao', lvl: 1},{tipo: 'Dieta', xp: 0.0, selecionado: false, visual: 'Cinzao', lvl: 1},{tipo: 'Produtividade', xp: 0.0, selecionado: false, visual: 'Vermelhao', lvl: 1}]);
               this.storage.set('tarefas',[]);
               this.auth = true;
           }
       });
    }

    ngOnInit() {}
        
}