import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrizesPage } from './prizes.page';

describe('PrizesPage', () => {
  let component: PrizesPage;
  let fixture: ComponentFixture<PrizesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrizesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
