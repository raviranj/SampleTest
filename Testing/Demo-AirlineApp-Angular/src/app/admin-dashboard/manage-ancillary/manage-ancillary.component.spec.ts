import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../app.module';
import { ManageAncillaryComponent } from './manage-ancillary.component';

describe('ManageAncillaryComponent', () => {
  let component: ManageAncillaryComponent;
  let fixture: ComponentFixture<ManageAncillaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAncillaryComponent ],
      imports:[AppModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
