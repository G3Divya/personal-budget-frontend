import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ExpensesComponent } from './expenses/expenses.component';
import { BudgetsComponent } from './budgets/budgets.component'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from  '@angular/material/icon';
import { EditBudgetDialogComponent } from './edit-budget-dialog/edit-budget-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddBudgetDialogComponent } from './add-budget/add-budget.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddExpenseDialogComponent } from './add-expense/add-expense.component';
import { MatSelectModule } from '@angular/material/select';
import { EditExpenseDialogComponent } from './edit-expense-dialog/edit-expense-dialog.component';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { AllBudgetsChartComponent } from './budgets-chart/budgets-chart.component';
import { AllExpensesChartComponent } from './expenses-chart/expenses-chart.component';
import { ExpenseLineComponent } from './expense-line/expense-line.component';
import { BudgetExpenseBarChartComponent } from './budget-expense-chart/budget-expense-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ExpensesComponent,
    BudgetsComponent,
    EditBudgetDialogComponent,
    AddBudgetDialogComponent,
    AddExpenseDialogComponent,
    EditExpenseDialogComponent,
    AllBudgetsChartComponent,
    AllExpensesChartComponent,
    ExpenseLineComponent,
    BudgetExpenseBarChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
