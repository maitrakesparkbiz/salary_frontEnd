import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddExpenseComponent} from './add-expense/add-expense.component';
import { AppComponent } from './app.component';
import {CategoryComponent} from './category/category.component';
import {ExpenseEntryComponent} from './expense-entry/expense-entry.component';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import {AuthGuard} from './login/auth.guard';
import {LoginComponent} from './login/login.component';

const expenseRoute:Routes= [
  { path:'',component:AppComponent},
  {path:"Home" , canActivate:[AuthGuard], component:ExpenseEntryComponent},
  {path:"Report" , canActivate:[AuthGuard], component:ExpenseListComponent},
  {path:"Add" , canActivate:[AuthGuard], component:AddExpenseComponent},
  {path:"Report/:id" , canActivate:[AuthGuard], component:AddExpenseComponent},
  {path:"Category" , canActivate:[AuthGuard], component:CategoryComponent},

  // {path:"Login" , component:LoginComponent},
  // {path:"Logout" , component:LoginComponent},

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

]

@NgModule({
  imports: [RouterModule.forRoot(expenseRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
