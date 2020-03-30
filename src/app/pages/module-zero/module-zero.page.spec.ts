import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleZeroPage } from './module-zero.page';

describe('ModuleZeroPage', () => {
  let component: ModuleZeroPage;
  let fixture: ComponentFixture<ModuleZeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleZeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleZeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
