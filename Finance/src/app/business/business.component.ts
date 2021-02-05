import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.compoent.html',
  styleUrls: ['./business.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BusinessComponent {
    cards: Card[] = [
        {src: 'Get Paid Instantly.png', label: 'Quick cash disbursement', description:'Get terms loans that your business needs within 72 hrs'},
        {src: 'Low interest rate.png', label: 'Low-interest rate', description:'Achieve your financial goals with an amazing interest rate starting at 13% per annum'},
        {src: 'Secure Payments.png', label: 'Zero Paperwork', description:'Get started instantly by submitting only your basic details & bank statements'},
        {src: 'freelancer_feature_icon_6@1.5x.png', label: 'Ace your business finances', description:'Manage banking, accounting & everything in between, on one platform'},
        {src: 'Covid.png', label: 'Loans to fight COVID-19', description:'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'}
    ];
  
}

class Card{
    src:string;
    label:string;
    description:string;
}