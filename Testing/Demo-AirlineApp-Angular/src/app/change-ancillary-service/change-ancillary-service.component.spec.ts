import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAncillaryServiceComponent } from './change-ancillary-service.component';
import { AppModule } from '../app.module';

describe('ChangeAncillaryServiceComponent', () => {
  let component: ChangeAncillaryServiceComponent;
  let fixture: ComponentFixture<ChangeAncillaryServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeAncillaryServiceComponent ],
      imports:[AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAncillaryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
