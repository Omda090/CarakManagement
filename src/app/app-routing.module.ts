import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarakComponent } from './component/carak/carak.component';
import { ShowdataComponent } from './component/showdata/showdata.component';
import { DisplaydataComponent } from './component/displaydata/displaydata.component';
import { LoginComponent } from './component/login/login.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ManageProductComponent } from './component/manage-product/manage-product.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},


  {
    path: 'carak',
    component : CarakComponent
  },

  {
    path: 'showdata',
    component : ShowdataComponent

  },

  {
    path: 'displaydata',
    component : DisplaydataComponent
  },

  {
    path: 'login',
    component : LoginComponent
  },

  {
    path: 'updateCarak/:id',
    component : UpdateComponent
  },

  {
    path: 'deleteCarak/:id',
    component : DeleteComponent
  },

  {
    path: 'ManageProduct',
    component : ManageProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
