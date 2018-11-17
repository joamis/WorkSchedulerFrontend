import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailedGroupComponent } from './detailed-group.component';

describe('DetailedGroupComponent', () => {
  let component: DetailedGroupComponent;
  let fixture: ComponentFixture<DetailedGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
