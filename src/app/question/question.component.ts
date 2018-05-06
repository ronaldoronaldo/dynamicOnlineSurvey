import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from '../mock-questions';
import { Router, ActivatedRoute} from '@angular/router';
import * as globs from '../globals'


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  counter = 0;
  questions = QUESTIONS;
  private sub: any;

  nextPage(): void {
    this.counter++;
    this.router.navigate(['questions', this.counter]);
  }

  checkEnterPressed(event): void {
    if(this.questions[this.counter].answer === '') return;
    if(event.keyCode === 13) this.nextPage();
  }

  previousPage(): void {
    this.counter--;
    this.router.navigate(['questions', this.counter]);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.counter = +params['id'];
    });
    if (!globs.start){
      this.router.navigate(['/'])
    }
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
