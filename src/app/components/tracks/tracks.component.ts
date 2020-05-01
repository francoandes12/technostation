import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent {
  titulo = 'Techno';
  titulo1 = 'House';
  titulo2 = 'Progress';
  mostrar = false ;
  mostrar1 = false;
  mostrar2 = false;
}