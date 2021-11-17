import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ToDoTask } from './Models/ToDoTask';
import { CommonModule } from "@angular/common";

import {Router} from '@angular/router';
import {Route} from '@angular/router';

@Component({
  selector: 'addTask',
  templateUrl: './addTask.component.html',
  styleUrls: ['./app.component.css']
})
export class AddTaskComponent {
    task : ToDoTask = new ToDoTask();
    url: string = "https://localhost:44323/ToDoTask/Post";
    

    save() {
        var added = new URLSearchParams();
        added.set('Name', this.task.Name);
        added.set('Description', this.task.Description);
        added.set('IsChecked', this.task.IsChecked==true?"true":"false");
        this.http.post(this.url, added, {headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'})}).subscribe(res=> this.notify());

    }
      
    constructor(private router: Router, private http: HttpClient){ 
    }

    back(){
        this.router.navigate(['/tasks']);
    }
    cancel(){
        this.back();
    }

    notify(){
        alert('Task added succesfully!');
    }
  }

