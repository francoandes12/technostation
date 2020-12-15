import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndesComponent } from './andes.component';

describe('AndesComponent', () => {
  let component: AndesComponent;
  let fixture: ComponentFixture<AndesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
