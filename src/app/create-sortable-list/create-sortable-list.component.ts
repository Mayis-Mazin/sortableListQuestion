import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-sortable-list',
  templateUrl: './create-sortable-list.component.html',
  styleUrls: ['./create-sortable-list.component.css']
})
export class CreateSortableListComponent implements OnInit {

  oGeneratorForm = new FormGroup({
    title: new FormControl(''),
    question: new FormControl([]),
    options: new FormControl([])
  });


  qusetions: any[] = [
    {
      title: '',
      qusetions: [],
      options: []
    }
  ];

option!: string;
options: Array<{option: string}> = []; 

constructor(private fb: FormBuilder,) { }

ngOnInit(): void {
  // create reactive form
  this.oGeneratorForm = this.fb.group({
    title: [""],
    question: [""],
  }); 
  
}

//Push the Option into the list.
onOptionCreate(){
  // get values
  let qusetion: any = this.oGeneratorForm.get('question')?.value;
  // get options
  let options = qusetion;
    
  /** */
  //create list option
  let input = this.oGeneratorForm.get('question')?.value;


  // save values
  this.qusetions[0].title = this.oGeneratorForm.get('title')?.value;
  this.qusetions[0].qusetions.push(input);

    // if user wants to add new question
  this.oGeneratorForm.get('question')?.setValue('');

  // save array of questions
  localStorage.setItem('d-questions', JSON.stringify(this.qusetions));


}

}
