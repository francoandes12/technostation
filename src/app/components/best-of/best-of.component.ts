import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {DjService} from '../../dj.service'
@Component({
  selector: 'app-best-of',
  templateUrl: './best-of.component.html',
  styleUrls: ['./best-of.component.css']
})
export class BestOfComponent implements OnInit {
  dj:any[] = []
  constructor(private _servicio: DjService,private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(params=>{
      this.dj = this._servicio.obtenerUno(params['id'])
    })
  }
  ngOnInit(): void {
    
}
}
