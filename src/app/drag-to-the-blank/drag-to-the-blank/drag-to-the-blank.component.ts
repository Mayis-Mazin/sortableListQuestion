import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-to-the-blank',
  templateUrl: './drag-to-the-blank.component.html',
  styleUrls: ['./drag-to-the-blank.component.css']
})
export class DragToTheBlankComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    ''
  ];
  movementCount: number = 0;


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (this.movementCount === 0) {
      this.movementCount++;  // block next object from being moved
      // copy obj being moved
      // var movingObj = event.previousContainer.data[event.previousIndex];

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      // transfer complete so copy object back
      // event.previousContainer.data.push(movingObj);
    }
  }
}
