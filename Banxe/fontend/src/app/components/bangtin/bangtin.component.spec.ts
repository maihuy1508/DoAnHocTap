import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangtinComponent } from './bangtin.component';

describe('BangtinComponent', () => {
  let component: BangtinComponent;
  let fixture: ComponentFixture<BangtinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangtinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangtinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
