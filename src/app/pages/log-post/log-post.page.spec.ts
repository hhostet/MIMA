import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogPostPage } from './log-post.page';

describe('LogPostPage', () => {
  let component: LogPostPage;
  let fixture: ComponentFixture<LogPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
