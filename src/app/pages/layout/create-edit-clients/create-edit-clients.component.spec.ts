import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditClientsComponent } from './create-edit-clients.component';

describe('CreateEditClientsComponent', () => {
  let component: CreateEditClientsComponent;
  let fixture: ComponentFixture<CreateEditClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
