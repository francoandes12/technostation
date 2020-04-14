import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Techno Station!!';

  constructor() { }

  ngOnInit(){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

}
