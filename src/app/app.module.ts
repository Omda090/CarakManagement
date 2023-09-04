import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarakComponent } from './component/carak/carak.component';
import { FormsModule } from '@angular/forms';
import { ShowdataComponent } from './component/showdata/showdata.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DisplaydataComponent } from './component/displaydata/displaydata.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ManageProductComponent } from './component/manage-product/manage-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CarakComponent,
    ShowdataComponent,
    DisplaydataComponent,
    LoginComponent,
    HeaderComponent,
    DeleteComponent,
    UpdateComponent,
    ManageProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CommonModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
