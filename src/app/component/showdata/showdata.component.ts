import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserCarak } from 'src/app/model/carak.model';
import { HttpServiceService } from 'src/app/service/http-service.service';


@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  carak_data : UserCarak = new UserCarak();
  selectedDate :  Date = new Date();
  event_list: UserCarak[] = [];
  carak_list : any[] = [];


  constructor(private modalService : NgbModal,private service:HttpServiceService) { }

  OpenModal(){

    const modelDev = document.getElementById('myModal');
    this.service.get_by_id(3).subscribe(
      res => {

        this.carak_data = res as UserCarak;
        if(modelDev != null){
          modelDev.style.display = 'block';
            }
      } ,
      err => alert('process failed')
      )

     // this.modalService.open(modal, {centered: true});


  }


//   openNewModal(id :number,content: TemplateRef<any>) {
//     const modelDev =  this.service.get_by_id(id).subscribe(
//       res => {

//         this.carak_data = res as UserCarak;
//         this.modalService.open(content, {centered: true}).result.then((result) => {

//         }).catch((res) => {});
//       } ,
//       err => alert('process failed')
//       )

// }


  CloseModal(){
    const modelDev = document.getElementById('myModal');
    if(modelDev != null)
    {
      modelDev.style.display = 'none';
    }
  }





  dateClass() {
    return (date: Date)=> {
      if (date.getDate() === 1) {
        return 'special-date';
      } else {
        return '';
      }
    };
  }

  ngOnInit(): void {
    this.get_all();
  }


  get_all(){
    this.service.get_all().subscribe(
      res => {
        this.event_list = res as UserCarak[];
      } ,
      err => alert('process failed')
    )
   }



}
