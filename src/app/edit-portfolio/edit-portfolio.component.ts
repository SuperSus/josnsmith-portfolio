import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.scss']
})
export class EditPortfolioComponent implements OnInit {

  portfolioForm: FormGroup;
  submitted = false;
  success = false;

  constructor( 
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.portfolioForm = this.formBuilder.group({
      name: ['', Validators.required],
      avatar_url: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

   // console.log(this.portfolioForm.controls);

    if (this.portfolioForm.invalid) {
        return;
    }

    this.success = true;
  }

  goBack(): void {
    this.location.back();
  }
}