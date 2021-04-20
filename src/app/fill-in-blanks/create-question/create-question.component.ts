import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css'],
  inputs: ['type']
})
export class CreateQuestionComponent implements OnInit, OnChanges {

  qGeneratorForm = new FormGroup({
    title: new FormControl(''),
    question: new FormControl([]),
    answers: new FormControl([]),
    type: new FormControl('')

  });

  title = 'not set';
  options = [
    'With Options',
    'Without Options',
  ];
  public changeType(event: any) {
    this.title = event.target.value;
  }
  qusetions: any =
    {
      title: '',
      qusetions: [],
      answers: [],
      type: ''
    };

  allQuestions: any = {};

  allQuestionSaved: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // create reactive form
    this.qGeneratorForm = this.fb.group({
      title: [""],
      question: [""],
      type: [""]
    });

    localStorage.removeItem('allQuestions');


    /*document.getElementById('div1')?.addEventListener('drop', function(ev: any) {
      ev.dataTransfer.setData("text", ev.target.id);
    })

    document.getElementById('div1')?.addEventListener('dragover', function(ev: any) {
      ev.preventDefault();
    }) 

    document.getElementById('drag1')?.addEventListener('dragstart', function(ev: any) {
      ev.dataTransfer.setData("text", ev.target.id);
    })
    
    document.getElementById('div2')?.addEventListener('drop', function(ev: any) {
      ev.dataTransfer.setData("text", ev.target.id);
    })

    document.getElementById('div2')?.addEventListener('dragover', function(ev: any) {
      ev.preventDefault();
    }) */

  }
  ngOnChanges(): void {

  }
  questionType(): void {

  }
  addQusetion() {
    // get values
    let qusetion: any = this.qGeneratorForm.get('question')?.value;

    // get answers
    let answers = qusetion.match(/\*\*.+?\*\*/g);

    // create blank
    let input = this.qGeneratorForm.get('question')?.value.replace(/\*\*.+?\*\*/g, '<input type="text" class="form-control js-question-generator" style="width: 100px !important; display: inline; margin=0 5px" />');

    // save values
    this.qusetions.title = this.qGeneratorForm.get('title')?.value;
    this.qusetions.type = this.qGeneratorForm.get('type')?.value;
    this.qusetions.qusetions.push(input);
    for (let i = 0; i <= answers.length - 1; i++)
      this.qusetions.answers.push(answers[i]);


    this.allQuestions = this.qusetions

    this.allQuestionSaved.push(this.allQuestions)

    this.qusetions = {
      title: '',
      qusetions: [],
      answers: [],
      type: ''
    };
    // if user wants to add new question
    this.qGeneratorForm.get('question')?.reset();

    localStorage.setItem('allQuestions', JSON.stringify(this.allQuestionSaved));
  }


  /** Predicate function that only listows even numbers to be dropped into a list. */
  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }

}
