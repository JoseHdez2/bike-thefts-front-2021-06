import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersFormComponent } from './users/users-form/users-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      validationMessages: [{
        name: 'required',
        message: 'This field is required.'
      }],
      extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    ToastrModule.forRoot({ closeButton: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
