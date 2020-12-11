import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
@Component({
  selector: "app-tracks",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.css"],
})
export class TracksComponent {
  title = "Techno Station-Tracks";
  titulo = "Techno";
  titulo1 = "House";
  titulo2 = "Progress";
  mostrar = false;
  mostrar1 = false;
  mostrar2 = false;
  track1 = "Bart Skils — Cruising Waves";
  track2 = "Nick Warren & Black 8 - Freedom Call";
  track3 = "Leon - T House";
  track4 = "Dmitry Molosh & Nōpi - Consciousness Switch";
  track5 = "Magdalena - Outlines";
  track6 = "Leon - Disco 3000";
  album1 = "Drumcode Presents A-Sides Vol.10.";
  constructor(private titleService: Title, private metaTagService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content: "Seccion en donde encontraras tracks de musica.",
    });
  }
}
