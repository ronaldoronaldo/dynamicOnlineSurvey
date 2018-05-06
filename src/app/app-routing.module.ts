import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent }    from './question/question.component';


const routes: Routes = [
  { path: 'questions/:id', component: QuestionComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
