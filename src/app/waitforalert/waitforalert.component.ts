import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waitforalert',
  templateUrl: './waitforalert.component.html',
  styleUrls: ['./waitforalert.component.css']
})
export class WaitforalertComponent implements OnInit {

  constructor() { }
  mybom() {
    setTimeout(function(){ var  myWindow =alert(location.hostname); }, 5000);

  }

  ngOnInit() {
  }

}
