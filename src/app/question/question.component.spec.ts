import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionComponent } from './question.component';
import { FormsModule } from '@angular/forms';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComponent ],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as counter at 0`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.counter).toEqual(0);
  }));
  it(`should have sub declared`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.counter).toEqual(0);
  }));
  it(`should have questions declared`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions).toBeTruthy();
  }));
  it(`1 question should contain 'what is your name'`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[0].question).toEqual('What is your name?');
  }));
  it(`1 answer should contain ''`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[0].answer).toEqual('');
  }));
  it(`2 question should contain 'how old are you'`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[1].question).toEqual('How old are you?');
  }));
  it(`2 answer should contain ''`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[1].answer).toEqual('');
  }));
  it(`3 question should contain 'What is your favorite show?'`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[2].question).toEqual('What is your favorite show?');
  }));
  it(`3 asnwer should contain ''`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[2].answer).toEqual('');
  }));
  it(`4 question should contain 'What do you know about Brazil?'`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[3].question).toEqual('What do you know about Brazil?');
  }));
  it(`4 answer should contain ''`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[3].answer).toEqual('');
  }));
  it(`5 question should contain 'What is your favorite book?'`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[4].question).toEqual('What is your favorite book?');
  }));
  it(`5 answer should contain ''`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions[4].answer).toEqual('');
  }));
  it(`questions length should be 5`, async(() => {
    const fixture = TestBed.createComponent(QuestionComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.questions.length).toEqual(5);
  }));
});
