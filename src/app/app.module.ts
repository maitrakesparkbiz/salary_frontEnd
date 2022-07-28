import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ForloopComponent } from './forloop/forloop.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import {  RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ForloopComponent,
    ExpenseListComponent,
    PipeComponent,
    CustomPipePipe,
    AddExpenseComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
