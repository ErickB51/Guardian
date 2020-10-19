import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
  constructor(private accountService: AccountService) {}

  ngOnInit() {}

}