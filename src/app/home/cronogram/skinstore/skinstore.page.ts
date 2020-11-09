import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-skinstore',
  templateUrl: './skinstore.page.html',
  styleUrls: ['./skinstore.page.scss'],
})
export class SkinstorePage implements OnInit {

  constructor(private accountService: AccountService, private toastController: ToastController) { }

  ngOnInit() {
  }
  
  public async presentToast(message: string, duration: number){
      const toast = await this.toastController.create({
          message: message,
          duration: duration
      });
      await toast.present();
  }
  
  public comprarVisual(name: string, value: number){
      var tmp : string = this.accountService.comprarVisual(name,value);
      this.presentToast(tmp,1000);
  }
}
