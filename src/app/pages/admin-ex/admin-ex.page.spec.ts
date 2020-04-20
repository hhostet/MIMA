import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminExPage } from './admin-ex.page';

describe('AdminExPage', () => {
  let component: AdminExPage;
  let fixture: ComponentFixture<AdminExPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminExPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
