import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarcadoresPage } from './marcadores.page';

describe('MarcadoresPage', () => {
  let component: MarcadoresPage;
  let fixture: ComponentFixture<MarcadoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarcadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
