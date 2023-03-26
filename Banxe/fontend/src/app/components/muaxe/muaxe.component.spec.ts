import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuaxeComponent } from './muaxe.component';

describe('MuaxeComponent', () => {
  let component: MuaxeComponent;
  let fixture: ComponentFixture<MuaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuaxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
