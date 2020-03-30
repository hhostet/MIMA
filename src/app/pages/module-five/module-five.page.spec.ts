import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleFivePage } from './module-five.page';

describe('ModuleFivePage', () => {
  let component: ModuleFivePage;
  let fixture: ComponentFixture<ModuleFivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleFivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleFivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
