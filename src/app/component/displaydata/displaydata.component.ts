import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCarak } from 'src/app/model/carak.model';
import { HttpServiceService } from 'src/app/service/http-service.service';



@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.scss']
})
export class DisplaydataComponent implements OnInit {

  carakList: any;
  myData : any;
  event_list: UserCarak[] = [];


constructor(private service : HttpServiceService, route: ActivatedRoute) {

}

  ngOnInit(): void {
    this.getCarakList();
  }


  getCarakList(){
    this.service.get_all().subscribe(
      res => {
        this.event_list = res as UserCarak[];
      } ,
      err => alert('process failed')
    )
   }



}
