import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalModalPage } from './cal-modal.page';

describe('CalModalPage', () => {
  let component: CalModalPage;
  let fixture: ComponentFixture<CalModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
