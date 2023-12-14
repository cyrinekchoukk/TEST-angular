import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public student : Student

  constructor(){
    this.student=new Student;

  }
  onSubmit(from:NgForm){
    console.log(this.student);
  }

}
