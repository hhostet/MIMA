import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleSevenPage } from './module-seven.page';

describe('ModuleSevenPage', () => {
  let component: ModuleSevenPage;
  let fixture: ComponentFixture<ModuleSevenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleSevenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleSevenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
