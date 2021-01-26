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
  dj = "Victor Ruiz";
  pais = "Brasil";
  genero = "Techno";
  sello = "Drumcode";
  foto =
    "https://d29rinwu2hi5i3.cloudfront.net/article_media/40540b70-85b0-419a-8271-076063ac9b2c/w768/victor_ruiz12.jpg";
  setdelMes = "Hernán Cattáneo - Subtract Radio 04";
  trackDelMes = "Agents Of Time - Chain Reaction";
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
