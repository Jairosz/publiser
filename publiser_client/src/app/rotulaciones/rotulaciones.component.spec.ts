import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotulacionesComponent } from './rotulaciones.component';

describe('RotulacionesComponent', () => {
  let component: RotulacionesComponent;
  let fixture: ComponentFixture<RotulacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotulacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RotulacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
