import {Component} from '@angular/core';
import * as globs from './globals';

@Component({
  selector: 'app-survey',
  templateUrl: './app.survey.html',
  styleUrls: ['./app.survey.scss']
})

export class AppComponent {

  start = false;

  started(): void {
    globs.started();
    this.start = globs.start;
  }

}
