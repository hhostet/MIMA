import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleNinePage } from './module-nine.page';

describe('ModuleNinePage', () => {
  let component: ModuleNinePage;
  let fixture: ComponentFixture<ModuleNinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleNinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleNinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
