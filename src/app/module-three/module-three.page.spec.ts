import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleThreePage } from './module-three.page';

describe('ModuleThreePage', () => {
  let component: ModuleThreePage;
  let fixture: ComponentFixture<ModuleThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
