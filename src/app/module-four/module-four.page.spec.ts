import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleFourPage } from './module-four.page';

describe('ModuleFourPage', () => {
  let component: ModuleFourPage;
  let fixture: ComponentFixture<ModuleFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleFourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
