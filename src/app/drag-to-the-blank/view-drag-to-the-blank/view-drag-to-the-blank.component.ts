import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-drag-to-the-blank',
  templateUrl: './view-drag-to-the-blank.component.html',
  styleUrls: ['./view-drag-to-the-blank.component.css']
})
export class ViewDragToTheBlankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [1, 2, 3, 4, 5, 6, 7, 8, 9];//list
  Dblank = [10];//Dblank

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
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
