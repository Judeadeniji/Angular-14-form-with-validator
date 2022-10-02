import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Validation from './utils/validators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup(
    {
      fullname: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      terms: new FormControl(''),
    }
  );

  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.xxx;

  }

  get f(): {
    [key: string]: AbstractControl
  } {
    return this.form.controls
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  xxx = this.formBuilder.group({
    fullname: ['', Validators.required],
    username: ['', [
      Validators.required, Validators.minLength(5), Validators.maxLength(15)
    ]],

    email: ['', [Validators.required, Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32)
    ]],
    confirmPassword: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  },
  {
    validators: [Validation.match('password', 'confirmPassword')]
  })

}
