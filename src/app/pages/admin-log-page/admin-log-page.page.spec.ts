import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminLogPagePage } from './admin-log-page.page';

describe('AdminLogPagePage', () => {
  let component: AdminLogPagePage;
  let fixture: ComponentFixture<AdminLogPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLogPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminLogPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
