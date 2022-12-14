import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExpenseEntryComponent} from './expense-entry/expense-entry.component';
import {ForloopComponent} from './forloop/forloop.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {PipeComponent} from './pipe/pipe.component';
import {CustomPipePipe} from './custom-pipe.pipe';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryComponent} from './category/category.component';
import {DataTablesModule} from 'angular-datatables';
import {LoginComponent} from './login/login.component';
import {ToastNoAnimationModule} from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';


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
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    ToastNoAnimationModule.forRoot(), // ToastrModule added
    StoreModule.forRoot({count: counterReducer}), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
