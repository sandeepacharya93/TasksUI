import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
      imports: [
         FormsModule
      ]
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { LoginComponent } from './login.component';
import { CommonModule } from "@angular/common";
import {AddTaskComponent} from './addTask.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'tasks', component: TasksComponent },
  {path: 'addTask', component: AddTaskComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    AddTaskComponent    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
