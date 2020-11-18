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
  video2 = "Guy J - Echos (Live) - 2020-11-13- LF032";
  video3 =
    "DCR536 – Drumcode Radio Live – Alan Fitzpatrick studio mix recorded in Southampton";
  video4 = "YOUSEF DJ set - ReConnect: When the Music Stops";
  video5 =
    "Moxy Muzik w/ Darius Syrossian b2b Ben Sterling - Brighton Music Conference";
  video6 = "Nina Kraviz Hot Steel stream @ Cavo Paradiso (Mykonos)";
  constructor(private titleService: Title, private metaTagService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content: "Seccion en donde encontraras sets de musica.",
    });
  }
}
