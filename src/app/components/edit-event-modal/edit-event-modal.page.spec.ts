import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEventModalPage } from './edit-event-modal.page';

describe('EditEventModalPage', () => {
  let component: EditEventModalPage;
  let fixture: ComponentFixture<EditEventModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEventModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
