import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MainContentComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
  ) {}
  
  formGroup: FormGroup;
  incomeValue = 0;
  expenseValue = 0;
  tenures = [{name: '6 Months', value: '6 Months'}, {name: '12 Months' , value: '12 Months'}, {name: '24 Months' , value: '24 Months'}]

  ngOnInit(): void {
    this.formInit();
  }
  
  private formInit() : void{
    this.formGroup = this.fb.group({
      monthlyIncome: [],
      monthlyExpense: [],
      enabled:[true]
    });
  }

  handleChange(event){
    this.incomeValue = event.value;
  }
  handleExpenseChange(event){
    this.expenseValue = event.value;
  }
}