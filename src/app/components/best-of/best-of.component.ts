import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-of',
  templateUrl: './best-of.component.html',
  styleUrls: ['./best-of.component.css']
})
export class BestOfComponent implements OnInit {
  dj1='Maceo Plex'
  fotodj1='https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/05/12202108/iCbhTOuLwJtl0so2Oe2BDCVOqeA8e9AGBCcZIjWo-972x597.jpeg';
  dj1Set='Maceo Plex Boiler Room Berlin DJ Set'
  dj1Set2='Maceo Plex @ Hudson River in New York, USA for Cercle'
  constructor() { }
  ngOnInit(): void {
  }

}
