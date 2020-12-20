import { Component, OnInit } from '@angular/core';
import { DjService } from './../../dj.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styles: []
})
export class YoutubeComponent implements OnInit {
  dj:any= []
  videoUrl= null
  constructor(private _servicio: DjService,private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(params=>{
      this.dj = this._servicio.obtenerUno(params['id'])
      this.videoUrl = this.dj.videoId
    })
   }

  ngOnInit(): void {
    const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
  }

}
