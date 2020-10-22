import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewEventModalPage } from './new-event-modal.page';

describe('NewEventModalPage', () => {
  let component: NewEventModalPage;
  let fixture: ComponentFixture<NewEventModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewEventModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
