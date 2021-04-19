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

  buyin(){
    this.router.navigate(['intelligencebuyin'])
  }

  data(){
    this.router.navigate(['data'])
  }

  operationalintelligence(){
    this.router.navigate(['operationalintelligence'])
  }

  analytics(){
    this.router.navigate(['analytics'])
  }

  visualizations(){
    this.router.navigate(['visualizations'])
  }

  keyinsights(){
    this.router.navigate(['keyinsights'])
  }



  about(){
    this.router.navigate(['about'])
  }


}
