import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardiansPage } from './guardians.page';

describe('GuardiansPage', () => {
  let component: GuardiansPage;
  let fixture: ComponentFixture<GuardiansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardiansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
