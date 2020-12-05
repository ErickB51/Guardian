import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../account.service';
import { Storage } from '@ionic/storage';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
    public auth;
    public nome = '';
    
    constructor(private storage: Storage, private accountService: AccountService, private toastController: ToastController) {
       this.auth = false;
       this.storage.get('firstTime').then(result=>{
           if(!result){
               this.storage.set('nome', '');
               this.storage.set('moedas',0);
               this.storage.set('conquistas',[{titulo: 'Novato', tipo: 1, progresso: 0.0, tarefas: 1},{titulo: 'Aprendiz', tipo: 1, progresso: 0.0, tarefas: 10},{titulo: 'Guerreiro', tipo: 1, progresso: 0.0, tarefas: 30},{titulo: 'Persistente', tipo: 1, progresso: 0.0, tarefas: 60},{titulo: 'Audacioso', tipo: 1, progresso: 0.0, tarefas: 90},{titulo: 'Praticamente uma Maquina', tipo: 1, progresso: 0.0, tarefas: 120},
                                             {titulo: 'Chique', tipo: 2, progresso: 0.0, tarefas: 1},{titulo: 'Refinado', tipo: 2,progresso: 0.0, tarefas: 3},{titulo: 'Aspirante da Moda', tipo: 2, progresso: 0.0, tarefas: 5},{titulo: 'Chavoso', tipo: 2, progresso: 0.0, tarefas: 6},{titulo: 'Estilo Unico', tipo: 2, progresso: 0.0, tarefas: 7},{titulo: 'Burgues', tipo: 2, progresso: 0.0, tarefas: 8}, 
                                             {titulo: 'Nem grande, nem pequeno', tipo: 3, progresso: 0.0, tarefas: 1}, {titulo: 'Frango', tipo: 3, progresso: 0.0, tarefas: 3}, {titulo: 'De tudo um pouco', tipo: 3, progresso: 0.0, tarefas: 5}, {titulo: 'Incansavel', tipo: 3, progresso: 0.0, tarefas: 7}, {titulo: 'Imbativel', tipo: 3, progresso: 0.0, tarefas: 15}, {titulo: 'Monstro', tipo: 3, progresso: 0.0, tarefas: 30}, 
                                             {titulo: 'Aprendiz de Sabio', tipo: 4, progresso: 0.0, tarefas: 1}, {titulo: 'Estudante', tipo: 4, progresso: 0.0, tarefas: 3}, {titulo: 'Garoto esforçado', tipo: 4, progresso: 0.0, tarefas: 5}, {titulo: 'Sabe Tudo!', tipo: 4, progresso: 0.0, tarefas: 7}, {titulo: 'Prodigio', tipo: 4, progresso: 0.0, tarefas: 15}, {titulo: 'Intelectual', tipo: 4, progresso: 0.0, tarefas: 30},
                                             {titulo: 'Guardião Alimentação', tipo: 5, progresso: 0.0, tarefas: 1}, {titulo: 'Açucar aqui não em!', tipo: 5, progresso: 0.0, tarefas: 3}, {titulo: 'Pão nunca mais!', tipo: 5, progresso: 0.0, tarefas: 5}, {titulo: 'Chocolate? Aqui não!', tipo: 5, progresso: 0.0, tarefas: 7}, {titulo: 'Gladiador', tipo: 5, progresso: 0.0, tarefas: 15}, {titulo: 'Estilo primal', tipo: 5, progresso: 0.0, tarefas: 30},
                                             {titulo: 'Guardião produtivo', tipo: 6, progresso: 0.0, tarefas: 1}, {titulo: 'Estagiário', tipo: 6, progresso: 0.0, tarefas: 3}, {titulo: 'Junior', tipo: 6, progresso: 0.0, tarefas: 5}, {titulo: 'Pleno', tipo: 6, progresso: 0.0, tarefas: 7}, {titulo: 'Senior', tipo: 6, progresso: 0.0, tarefas: 15}, {titulo: 'CEO', tipo: 6, progresso: 0.0, tarefas: 30}]);
               this.storage.set('configuracoes',[{val: "Vibracao", ativado: true},{val: "Efeitos Sonoros", ativado: true}]);
               this.storage.set('visuais',[{nome: 'Amarelao', equipado: true},{nome: 'Verdao', equipado: true},{nome: 'Cinzao', equipado: true},{nome: 'Vermelhao', equipado: true}]);
               this.storage.set('guardioes',[{tipo: 'Personal', xp: 0.0, selecionado: false, visual: 'Amarelao', lvl: 1},{tipo: 'Mentor', xp: 0.0, selecionado: false, visual: 'Verdao', lvl: 1},{tipo: 'Dieta', xp: 0.0, selecionado: false, visual: 'Cinzao', lvl: 1},{tipo: 'Produtividade', xp: 0.0, selecionado: false, visual: 'Vermelhao', lvl: 1}]);
               this.storage.set('tarefas',[]);
               this.auth = true;
           }
       });
    }

    ngOnInit() {}

    public configurarUsuario(guardiao: string){
        var tempNome: string = '';
        tempNome = this.nome.trim();

        if(tempNome === ''){
            this.nome = '';
            this.presentToast();
        } 
        else {
            this.accountService.escolherGuardiao(guardiao, tempNome);
        }
    }

    public async presentToast(){
        const toast = await this.toastController.create({message: 'Por favor, insira um nome válido!', duration: 1000});
        await toast.present();
    }

}