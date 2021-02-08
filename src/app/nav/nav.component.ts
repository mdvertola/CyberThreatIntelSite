import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  home(){
    this.router.navigate(['home'])
  }
  industry(){
    this.router.navigate(['industry'])
  }

  threatmodels(){
    this.router.navigate(['threatmodels'])
  }
  data(){
    this.router.navigate(['data'])
  }
  operationalintelligence(){
    this.router.navigate(['operationalintelligence'])
  }
  about(){
    this.router.navigate(['about'])
  }


}
