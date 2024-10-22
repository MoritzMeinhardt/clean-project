import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialTestComponent } from './angular-material-test.component';

describe('AngularMaterialTestComponent', () => {
  let component: AngularMaterialTestComponent;
  let fixture: ComponentFixture<AngularMaterialTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularMaterialTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularMaterialTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
