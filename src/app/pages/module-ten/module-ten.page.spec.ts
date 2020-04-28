import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleTenPage } from './module-ten.page';

describe('ModuleTenPage', () => {
  let component: ModuleTenPage;
  let fixture: ComponentFixture<ModuleTenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleTenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
