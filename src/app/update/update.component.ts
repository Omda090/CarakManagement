import { Component, OnInit } from '@angular/core';
import { UserCarak } from '../model/carak.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../service/http-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{

  carakData : UserCarak = new UserCarak();
  id: any;


  constructor(public service: HttpServiceService, public route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {

      this.id  =paramMap.get('id');
      console.log(this.id);
      this.PreviewDetails(this.id);

    })

    this.service.GetCarakById(this.id);
  }

  PreviewDetails(id:number){
    this.service.getEmpolyeesById(id).subscribe((res: any) => {
      this.carakData= res as UserCarak;

    })

  }


  onUpdate(UpdateEmployee:NgForm) {
    return this.service.update_carak(UpdateEmployee.value,UpdateEmployee.value.id).subscribe(response => {
   alert("Updated Succefully")

      },
      error => {
        alert("not Updated .. !")
      }
    );
  }


}
