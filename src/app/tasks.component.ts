import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToDoTask } from './Models/ToDoTask';
import { CommonModule } from "@angular/common";

import {Router} from '@angular/router';
import {Route} from '@angular/router';


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./app.component.css']
})


export class TasksComponent {
  

  taskList : Array<ToDoTask> = [];
  tasks = this.taskList;
  url : string = 'https://localhost:44323/ToDoTask/Get';
   
  constructor(private http: HttpClient,private router: Router){
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }

  ngOnInit(){      
    this.getdata().subscribe(data => this.taskList=data);  
  }

    getdata(): Observable<ToDoTask[]>{
    return this.http.get<ToDoTask[]>(this.url);
}
     

  }

  