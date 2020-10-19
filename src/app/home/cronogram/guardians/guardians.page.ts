import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account.service';

@Component({
  selector: 'app-guardians',
  templateUrl: './guardians.page.html',
  styleUrls: ['./guardians.page.scss'],
})
export class GuardiansPage implements OnInit {

  constructor(private accountService : AccountService) { }

  ngOnInit() {
  }

}
