import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerifyServiceService implements CanActivate {
    
  constructor(private router: Router, private storage: Storage) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean{
      var temp: boolean;
      temp = true;
      this.storage.get('firstTime').then(result=>{
          if(result){
              this.router.navigate(['./home/cronogram']);
              temp =  false;
          }
      });
      return temp;  
  }
}
