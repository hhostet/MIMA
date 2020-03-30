import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModulesListPage } from './modules-list.page';

describe('ModulesListPage', () => {
  let component: ModulesListPage;
  let fixture: ComponentFixture<ModulesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
