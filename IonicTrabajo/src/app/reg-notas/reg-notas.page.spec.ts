import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegNotasPage } from './reg-notas.page';

describe('RegNotasPage', () => {
  let component: RegNotasPage;
  let fixture: ComponentFixture<RegNotasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
