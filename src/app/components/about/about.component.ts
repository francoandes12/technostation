import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  title = "Techno Station-About";
  constructor(private titleService: Title, private metaTagService: Meta) {}
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "description",
      content: "Informacion Sobre la pagina y el creador.",
    });
  }
}
