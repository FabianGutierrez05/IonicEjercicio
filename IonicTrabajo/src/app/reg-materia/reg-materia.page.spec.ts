import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegMateriaPage } from './reg-materia.page';

describe('RegMateriaPage', () => {
  let component: RegMateriaPage;
  let fixture: ComponentFixture<RegMateriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegMateriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
