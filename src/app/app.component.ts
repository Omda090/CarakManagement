import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';
import { UserCarak } from './model/carak.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  carak_data : UserCarak = new UserCarak();
  selectedDate :  Date = new Date();
  constructor(private service:HttpServiceService){}

  OpenModal(){
    const modelDev = document.getElementById('exampleModalLabel');
    if(modelDev != null)
    {
      modelDev.style.display = 'block';
    }
  }

  ngOnInit(): void {

  }
  title = 'CarakManagement';



}
