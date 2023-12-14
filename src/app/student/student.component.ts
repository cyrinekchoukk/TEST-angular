import { Component } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  table: { id: number; name: string; email: string; gender:string }[] = [];
  constructor(private studentService: StudentServiceService){

  }
  ngOnInit():void{
    this.getStudent();
  }
  getStudent(){
    this.table=this.studentService.StudentTable;
    console.log("my student", this.table);
  }

}
