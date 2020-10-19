import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account.service';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.page.html',
  styleUrls: ['./prizes.page.scss'],
})
export class PrizesPage implements OnInit {

  constructor(private accountService : AccountService) { }

  ngOnInit() {
  }

}
