import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
@Component({
  selector: "app-sets",
  templateUrl: "./sets.component.html",
  styleUrls: ["./sets.component.css"],
})
export class SetsComponent implements OnInit {
  title = "Techno Station-Sets";
  video1 = "Charlotte de Witte Alternative Top 100 DJs Winner";
  video2 = "Marino Canal Live From The Ruins Of Acinipo";
  video3 = "Adam Beyer recorded for Beatport: When The Music Stops in Ibiza";
  video4 = "Hot Since 82 - Pier Pressure";
  video5 =
    "At Home with Henry 88 Club Sessions: Organic House";
  video6 = "Eelke Kleijn at Beograđanka Tower";
  constructor(private titleService: Title, private metaTagService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content: "Seccion en donde encontraras sets de musica.",
    });
  }
}
