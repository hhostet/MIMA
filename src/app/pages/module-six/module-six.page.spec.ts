import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModuleSixPage } from './module-six.page';

describe('ModuleSixPage', () => {
  let component: ModuleSixPage;
  let fixture: ComponentFixture<ModuleSixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleSixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleSixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
