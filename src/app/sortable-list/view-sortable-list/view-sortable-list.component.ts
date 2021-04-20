import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-sortable-list',
  templateUrl: './view-sortable-list.component.html',
  styleUrls: ['./view-sortable-list.component.css']
})
export class ViewSortableListComponent implements OnInit {
    //Push object into the array.
    option!: string;

    options: any = []; 

    constructor() {}

    ngOnInit() {
      let dQuestions: any = localStorage.getItem('d-questions')
      let jsonDQuestions: any = JSON.parse(dQuestions);
      this.options = jsonDQuestions[0].qusetions;
      console.log(this.options)
    }

    onOptionCreate(){

    }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.options, event.previousIndex, event.currentIndex);
      console.log(this.options)
    }

}
