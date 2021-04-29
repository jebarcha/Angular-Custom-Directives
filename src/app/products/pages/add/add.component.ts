import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent {

  text1: string = 'Chuy B';
  color: string = 'red';
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  hasError(field: string): boolean {
    // return this.myForm.get(field)?.touched  &&
    //    this.myForm.get(field)?.invalid || false;
    return this.myForm.get(field)?.invalid || false;
  }

  changeName() {
    this.text1 = Math.random().toString();
  }

  changeColor() {
    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));;
  }
}
