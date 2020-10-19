import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account.service';

@Component({
  selector: 'app-skinstore',
  templateUrl: './skinstore.page.html',
  styleUrls: ['./skinstore.page.scss'],
})
export class SkinstorePage implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

}
