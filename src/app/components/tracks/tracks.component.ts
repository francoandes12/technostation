import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#contenedor').hide();
    $('#mostrar').click(() => {
      $('div#contenedor').toggle();
    });
  }

}
