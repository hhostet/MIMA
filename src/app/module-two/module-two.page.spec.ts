import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleTwoPage } from './module-two.page';

describe('ModuleTwoPage', () => {
  let component: ModuleTwoPage;
  let fixture: ComponentFixture<ModuleTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
