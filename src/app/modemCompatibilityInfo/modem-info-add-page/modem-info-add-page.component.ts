import { Component, OnInit, Directive, NgModule } from '@angular/core';

import {NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modem-info-add-page',
  templateUrl: './modem-info-add-page.component.html',
  styleUrls: ['./modem-info-add-page.component.css'],
})

@Directive({
  selector: 'input[type=text]',
  host: {
      '(input)': 'ref.nativeElement.value=$event.target.value.toUpperCase()',
  }

})

export class ModemInfoAddPageComponent implements OnInit {
  addModemForm  : FormGroup;
  

  

  arr: any[]=[];
  constructor(private fb: FormBuilder) { 
    this.addModemForm = this.fb.group({
      make: [null, Validators.required],
      model: [null, Validators.required],
      accessTechnology :  [null, Validators.required],
      maxSpeed :  [null, Validators.required],
      manulaOverride : [null,null],
      endOfLife : [null,null],
    });
    this.addModemForm.controls['make'].disable();
  }

  ngOnInit() {
  }

  saveModemInfo(form : NgForm){
    if(form.value.make=="" || form.value.model=="" || form.value.accessTechnology==""){
      alert("Please enter required fields");
    }
    this.arr = form.value;
    console.log(JSON.stringify( this.arr));
    console.log(JSON.stringify( form.value));
    form.reset();
  }
}


