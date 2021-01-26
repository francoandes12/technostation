import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
@Component({
  selector: "app-sets",
  templateUrl: "./sets.component.html",
  styleUrls: ["./sets.component.css"],
})
export class SetsComponent implements OnInit {
  title = "Techno Station-Sets";
  video1 = "Guy J | ECHOS 18-12-2020";
  video2 = "Nic Fanciulli Soundscapes set @ Bodiam Castle";
  video3 = "Hernan Cattaneo - SunsetStream Eclipse Edition";
  video4 = "Hot Since 82 - Pier Pressure";
  video5 =
    "Jamie Jones DJ set - @Beatport x Absolut NYE 2020 Global Celebration";
  video6 = "At Home with Henry 98 The Last Club Sessions of the Season";
  constructor(private titleService: Title, private metaTagService: Meta) { }
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content: "Seccion en donde encontraras sets de musica.",
    });
  }
}
