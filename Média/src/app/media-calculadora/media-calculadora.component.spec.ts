import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCalculadoraComponent } from './media-calculadora.component';

describe('MediaCalculadoraComponent', () => {
  let component: MediaCalculadoraComponent;
  let fixture: ComponentFixture<MediaCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
