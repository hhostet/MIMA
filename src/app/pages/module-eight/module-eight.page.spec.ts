import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleEightPage } from './module-eight.page';

describe('ModuleEightPage', () => {
  let component: ModuleEightPage;
  let fixture: ComponentFixture<ModuleEightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleEightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleEightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
