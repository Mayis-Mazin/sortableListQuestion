import { Component, OnInit, SimpleChanges, OnChanges, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit, OnChanges, AfterViewInit {
  @Input('allQ') allQ: any = [];

  title: string = '';
  questions: any[] = []; //all Questions 

  answers: any[] = []; 
  options: any[] = [];

  answerContainer:any[]=[]; // the Container that will hold the answare
  movementCount: number = 0; //counter to determine if the move was allowed 

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void { }

  ngAfterViewInit() {

    setTimeout(() => {
      if (localStorage.getItem('allQuestions')) {
        let dataFromStorage: any = localStorage.getItem('allQuestions');

        let options = JSON.parse(dataFromStorage);

        options.forEach((val: any) => {
          let answer: any = val['answers']
          this.options.push(
            answer[0].replaceAll('**', '')
          )
        });

        this.shufle(this.options)

        this.initView(JSON.parse(dataFromStorage));
      }
    }, 10)


  }

  shufle(arr: any) {
    return arr.sort(() => Math.random() - 0.5)
  }

  // get questions

  initView(q: any) {
    let dataFromStorage: any = q
    let questions: any = dataFromStorage;
    for (let i = 0; i <= q.length - 1; i++) {
      this.questions = questions[i].qusetions
      this.appendHTML(this.questions);
      this.saveInputValue();
    }
  }

  // append inputs to html
  appendHTML(questions: any): void {
    let list: any = document.getElementById('js_questions');
    let li = '';
    for (let i = 0; i <= questions.length - 1; i++) {
      li += `<li class="list-group-item">${questions[i]}</li>`
    }
    list.innerHTML += li;
  }

  // allow each input to save its value
  saveInputValue() {
    let blanks = document.getElementsByClassName('js-question-generator');

    for (let i = 0; i <= blanks.length - 1; i++) {
      blanks[i].addEventListener('keyup', function (e: any) {
        if (e.keyCode == 8 || e.keyCode == 13 || e.keyCode == 18 || e.keyCode == 9 || e.keyCode == 27) {
          return;
        }
        let value: any = blanks[i].getAttribute('value') //+ e.key
        value = (value == null) ? e.key : value + e.key

        blanks[i].setAttribute('value', value)
      })
    }
  }

  // get user answers

  submit() {
    let blanks = document.getElementsByClassName('js-question-generator');

    this.answers = [];

    for (let i = 0; i <= blanks.length - 1; i++) {
      this.answers.push(blanks[i].getAttribute('value'))
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const isNew = setInterval(() => {
      if (typeof (changes.allQ) == 'undefined') {
        null;
      } else {
        this.allQ = changes.allQ.currentValue;
        if (Object.keys(this.allQ).length > 0) {
          this.questions = this.allQ.qusetions
          this.appendHTML(this.questions);
          this.saveInputValue();
        }
        clearInterval(isNew);
      }
    }, 100);
  }



  // Limit drag - drop container to accept only one item 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (this.movementCount === 0) {

      this.movementCount++;  // block next object from being moved

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

    }
  }

}
