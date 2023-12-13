import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntesFrecuentsComponent } from './preguntes-frecuents.component';

describe('PreguntesFrecuentsComponent', () => {
  let component: PreguntesFrecuentsComponent;
  let fixture: ComponentFixture<PreguntesFrecuentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntesFrecuentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreguntesFrecuentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
