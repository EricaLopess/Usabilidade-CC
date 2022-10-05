import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { ClienteInserirComponent } from './clientes/cliente-inserir/cliente-inserir.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component'
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
declarations: [AppComponent, ClienteInserirComponent, CabecalhoComponent],
imports: [
BrowserModule,
FormsModule,
BrowserAnimationsModule,
MatInputModule,
MatCardModule,
MatButtonModule, MatToolbarModule
],
providers: [],
bootstrap: [AppComponent],
})
export class AppModule {}
