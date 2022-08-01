import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import {CategoryComponent} from './category/category.component';
import {ExpenseEntryComponent} from './expense-entry/expense-entry.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {AuthGuard} from './login/auth.guard';
import {LoginComponent} from './login/login.component';

const expenseRoute:Routes= [

  {path:"Home" , canActivate:[AuthGuard], component:ExpenseEntryComponent},
  {path:"Report" , canActivate:[AuthGuard], component:ExpenseListComponent},
  {path:"Add" , canActivate:[AuthGuard], component:AddExpenseComponent},
  {path:"Report/:id" , canActivate:[AuthGuard], component:AddExpenseComponent},
  {path:"Category" , canActivate:[AuthGuard], component:CategoryComponent},
  {path:"Login" , component:LoginComponent},
  {path:"Logout" , component:LoginComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(expenseRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
