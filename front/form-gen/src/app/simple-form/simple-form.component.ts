import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})

export class SimpleFormComponent {

  nextIndex : number = 0;
  num:number = 0;

  form = this.fb.group({
    entries: this.fb.array([])
  });

  get entries() : FormArray{
    return this.form.get("entries") as FormArray;
  }
  
  constructor(private fb : FormBuilder){}


  deleteInput(index: number) {

    this.entries.removeAt(index);
  
  }
  
  pushInput() {
    
    // this.entries.push( new FormControl());
    this.nextIndex++;
    const entry = this.fb.group({
      input: ['', Validators.required], 
    });

    this.entries.push( entry );
  }

  insertInput(index:number){

    this.entries.insert(index, new FormControl);
    this.nextIndex++;

  }

  submit(){
  
    console.log( this.num++);
    
  }
  
  reset() {
    
    this.form.reset();
  
  }



}
