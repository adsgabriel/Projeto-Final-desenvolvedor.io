import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaAppComponent } from './conta.app.component';

import { ContaRoutingModule } from './conta.route';
import { ContaService } from './services/conta.service';

import { CustomFormsModule } from 'ng2-validation';



@NgModule({
  declarations: [
    CadastroComponent,
    ContaAppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContaRoutingModule,
    CustomFormsModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
