import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemDialogComponent } from './create-item-dialog.component';

describe('CreateServerDialogComponent', () => {
  let component: CreateItemDialogComponent;
  let fixture: ComponentFixture<CreateItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateItemDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
