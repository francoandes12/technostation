import { Injectable } from '@angular/core';
import { SafeResourceUrl,DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class DjService {
  dj:any[]=[

    {
      nombre:'Maceo Plex',
      pais:'USA',
      genero:'Techno',
      fotoUrl:'https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/05/12202108/iCbhTOuLwJtl0so2Oe2BDCVOqeA8e9AGBCcZIjWo-972x597.jpeg',
      set1Name:'Maceo Plex Boiler Room Berlin DJ Set',
      videoId:'5vHRUsP20dQ'
    },
    {
      nombre:'Tale of Us',
      pais:'USA',
      genero:'Techno',
      set1Name:'Tale Of Us | Boiler Room Berlin 5th Birthday DJ Set',
      videoId:'8v_3k-94n30',
      fotoUrl:'https://djmag.es/wp-content/uploads/sites/10/2017/08/tale-of-us-548.jpg',
    },
    {
      nombre:'Stephan Bodzin',
      pais:'USA',
      genero:'Techno',
      set1Name:'Tale Of Us | Boiler Room Berlin 5th Birthday DJ Set',
      videoId:'8v_3k-94n30',
      fotoUrl:'https://djmag.es/wp-content/uploads/sites/10/2017/08/tale-of-us-548.jpg'
    },
  ]
  

  constructor() {
    
  }
  obtenerDjs(){
    return this.dj
  }
  obtenerUno(i){
    return this.dj[i]
  }
}
