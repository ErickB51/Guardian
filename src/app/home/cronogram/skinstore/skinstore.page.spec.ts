import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkinstorePage } from './skinstore.page';

describe('SkinstorePage', () => {
  let component: SkinstorePage;
  let fixture: ComponentFixture<SkinstorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinstorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkinstorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
