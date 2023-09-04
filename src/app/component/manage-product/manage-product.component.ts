import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from 'src/app/model/Product.model';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  carak_data : product = new product();
  DepartmentList: any;

  constructor(private service:HttpServiceService){}

  ngOnInit(): void {

  }

  onSave(form : NgForm){
    this.service.add_product(form.value).subscribe(
     res => {alert('Add Successfully'); form.reset();} ,
     err => alert('Add Failed')
    )
 }

}
