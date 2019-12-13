import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticUpdateComponent } from './automatic-update.component';

describe('AutomaticUpdateComponent', () => {
  let component: AutomaticUpdateComponent;
  let fixture: ComponentFixture<AutomaticUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
