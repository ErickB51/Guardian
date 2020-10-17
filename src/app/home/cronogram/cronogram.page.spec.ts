import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CronogramPage } from './cronogram.page';

describe('CronogramPage', () => {
  let component: CronogramPage;
  let fixture: ComponentFixture<CronogramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronogramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CronogramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
