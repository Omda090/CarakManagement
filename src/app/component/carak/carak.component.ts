import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from 'src/app/model/Product.model';
import { UserCarak } from 'src/app/model/carak.model';
import { HttpServiceService } from 'src/app/service/http-service.service';

@Component({
  selector: 'app-carak',
  templateUrl: './carak.component.html',
  styleUrls: ['./carak.component.scss']
})
export class CarakComponent implements OnInit{
  carak_data : UserCarak = new UserCarak();
  DepartmentList:any[] = [];

  constructor(private service : HttpServiceService){}


  OpenModal(){
    const modelDev = document.getElementById('exampleModalLabel');
    if(modelDev != null)
    {
      modelDev.style.display = 'block';
    }
  }

  ngOnInit(): void {

     this.service.getDeptList().subscribe((data:any) => {
      this.DepartmentList=data;

     })
  }

  onSave(form : NgForm){
     this.service.add_carak(form.value).subscribe(
      res => {alert('Add Successfully'); form.reset(); } ,
      err => alert('Add Failed')
     )
  }


}
