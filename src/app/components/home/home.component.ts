import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  title = "Techno Station-Inicio";
  titulo = "Techno Station!!";
  dj = "SASHA";
  pais = "Reino Unido";
  genero = "Progress";
  sello = "Last Night on Earth";
  foto =
    "https://wolkenmagazine.com/wp-content/uploads/2019/10/f99-Sasha_press-shot_blog.jpg";
  setdelMes = "Guy J - Melodic Podcast 025";
  trackDelMes = "Pig&Dan & Victor Ruiz — Paradise Lost";

  constructor(private titleService: Title, private metaTagService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content: "Pagina principal de Techno Station",
    });
  }
}
