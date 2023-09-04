import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) {}


  goToHome() {
     this.router.navigate(['carak']);
  }

  logout(){
    this.router.navigate(['login']);
  }
}
