import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationComponent } from './regulation.component';

describe('RegulationComponent', () => {
  let component: RegulationComponent;
  let fixture: ComponentFixture<RegulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
