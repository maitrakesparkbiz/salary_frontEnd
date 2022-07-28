import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

const expenseRoute:Routes= [
  {path:"Home" ,component:ExpenseEntryComponent},
  {path:"Report" ,component:ExpenseListComponent},
  {path:"Add" ,component:AddExpenseComponent},
  {path:"Report/:id" ,component:AddExpenseComponent},
  {path:"Category" ,component:CategoryComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(expenseRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
