import { Component } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent {

  constructor() { }

  ngOnInit(): void {
    $('#contenedor1').hide();
    $('#mostrar1').click(() => {
      $('div#contenedor1').toggle();
    });
    $('#contenedor2').hide();
    $('#mostrar2').click(() => {
      $('div#contenedor2').toggle();
    });
    $('#contenedor3').hide();
    $('#mostrar3').click(() => {
      $('div#contenedor3').toggle();
    });
  }
   

}
