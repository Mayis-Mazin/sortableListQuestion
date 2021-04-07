import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-sortable-list',
  templateUrl: './view-sortable-list.component.html',
  styleUrls: ['./view-sortable-list.component.css']
})
export class ViewSortableListComponent implements OnInit {

    //Push object into your array.
    option!: string;

    options: Array<{option: string}> = []; 

    constructor() {}

    ngOnInit() {
      let dQuestions: any = localStorage.getItem('d-questions')
      let jsonDQuestions: any = JSON.parse(dQuestions);
      this.options = jsonDQuestions[0].qusetions;
    }

    onOptionCreate(){
        console.log(this.option );
        this.options.push({ option: this.option});
        this.option = "";
    }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.options, event.previousIndex, event.currentIndex);
    }

  

  // options = [
  //   'Mohammad', 
  //   'Mayis',
  //   'Leen',
  //   'Demaa',
  //   'Omar'
  // ];

}
