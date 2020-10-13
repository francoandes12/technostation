import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sets",
  templateUrl: "./sets.component.html",
  styleUrls: ["./sets.component.css"],
})
export class SetsComponent implements OnInit {
  video1 = "Carl Cox Live @ EXIT LIFE STREAM 2020";
  video2 = "Nic Fanciulli DJ set - ReConnect";
  video3 = "Monolink Live set - Beatport x Dessert Live Stream ";
  video4 = "Nicole Moudaber DJ set - ReConnect";
  video5 = "Unity Live: Mathame";
  video6 = "Nina Kraviz Hot Steel stream @ Cavo Paradiso (Mykonos)";
  constructor() {}

  ngOnInit(): void {}
}
