import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFormComponent } from './demande-form.component';

describe('DemandeFormComponent', () => {
  let component: DemandeFormComponent;
  let fixture: ComponentFixture<DemandeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
