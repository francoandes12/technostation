import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DjService } from '../../dj.service'
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  title = "Techno Station-Inicio";
  titulo = "Techno Station!!";
  dj = "Eelke Kleijn";
  pais = "Holanda";
  genero = "Melodic-Progress";
  sello = "Varios";
  foto =
    "https://ege.electronicgroove.com/wp-content/uploads/2020/06/Eelke-Kleijn-I.jpg";
  setdelMes = "Guy J - Echos (Live) - 2021-03-19 - LF044";
  trackDelMes = " Tripppin (Maksim Dark Remix)ents Of Time - Chain Reaction";
  djs: any[] = []

  constructor(private titleService: Title, private metaTagService: Meta, private _servicio: DjService) { }
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content: "Pagina principal de Techno Station",
    });
    this.djs = this._servicio.obtenerDjs()
  }
}
