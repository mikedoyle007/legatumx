import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { FeaturesComponent } from '../features/features.component';
import { ToursComponent } from '../tours/tours.component';
import { GetStartedComponent } from '../get-started/get-started.component';
import { HomepageModalComponent } from '../homepage-modal/homepage-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BehaviorSubject } from '../../../../../node_modules/rxjs';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  // stub found here: https://github.com/angular/angularfire2/issues/1706
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireAuthModule
      ],
      declarations: [
        LandingComponent,
        HeaderComponent,
        AboutComponent,
        FeaturesComponent,
        ToursComponent,
        GetStartedComponent,
        HomepageModalComponent
      ],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
