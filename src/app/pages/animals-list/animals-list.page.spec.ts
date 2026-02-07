import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalsListPage } from './animals-list.page';

describe('AnimalsListPage', () => {
  let component: AnimalsListPage;
  let fixture: ComponentFixture<AnimalsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
