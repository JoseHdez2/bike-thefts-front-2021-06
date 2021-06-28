import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users-form',
  template: `
    <div id="app-container">
      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="m-4">
        <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  `,
  styles: [``]
})
export class UsersFormComponent {

  constructor(
    private toastr: ToastrService, 
    private usersService: UsersService
  ) {}

  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          className: 'flex-auto',
          templateOptions: {
            label: 'First Name',
            placeholder: 'John',
            required: true,
          }
        },
        {
          key: 'surnames',
          type: 'input',
          className: 'flex-auto',
          templateOptions: {
            label: 'Last Name(s)',
            placeholder: 'Smith',
            cols: 2
          }
        },        
        {
          key: 'email',
          type: 'input',
          className: 'flex-auto',
          templateOptions: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
          }
        }
      ]
    },
  ];

  onSubmit() {
    console.log(this.model);
    if(!this.form.valid) {
      this.toastr.error(`Please check the form fields.`, 'Form Error');
      return;
    }
    this.usersService.createUser(this.model).subscribe(data => {
      this.toastr.success('Created User', 'Success');
    })
  }
}
