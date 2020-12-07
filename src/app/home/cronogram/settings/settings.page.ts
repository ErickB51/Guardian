import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public accountService: AccountService) { }

  ngOnInit() {
  }

}
