import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'cronogram.page.html',
  styleUrls: ['cronogram.page.scss'],
})
export class CronogramPage implements OnInit {

    constructor(private accountService: AccountService) {

      
 
    }

    ngOnInit() {}
    
}
