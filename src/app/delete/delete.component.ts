import { Component, OnInit } from '@angular/core';
import { UserCarak } from '../model/carak.model';
import { HttpServiceService } from '../service/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  carakData : UserCarak = new UserCarak();
  id: any;

  constructor(public service:HttpServiceService, public route:ActivatedRoute, private navigation:Router){}


  ngOnInit(): void {

    this.route.paramMap.subscribe(paramMap => {

      this.id  =paramMap.get('id');
      console.log(this.id);
      this.PreviewDetails(this.id);
  })  }

  onDelete(UpdateCarak: NgForm) {
     return this.service.deleteCarak(UpdateCarak.value.id).subscribe(
      respo => {
        alert('Carak Delete')
        this.navigation.navigateByUrl("carak")
      },
      error => {alert('Something Went Wrong')}
     );
  }




  PreviewDetails(id:number){
    this.service.getEmpolyeesById(id).subscribe((res: any) => {
      this.carakData= res as UserCarak;

    })

  }



}
