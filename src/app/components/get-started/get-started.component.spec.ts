import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetStartedComponent } from './get-started.component';
import { BehaviorSubject } from '../../../../../node_modules/rxjs';

describe('GetStartedComponent', () => {
  let component: GetStartedComponent;
  let fixture: ComponentFixture<GetStartedComponent>;

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
      imports: [ FormsModule ],
      declarations: [ GetStartedComponent ],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
