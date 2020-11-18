import { Component } from "@angular/core";
import { Meta } from "@angular/platform-browser";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private metaTagService: Meta) {}
  title = "Techno Station";
  ngOnInit() {
    this.metaTagService.addTags([
      {
        name: "keywords",
        content: "Techno station, techno station cordoba, techno",
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Franco Ibarra" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2020-11-18", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" },
    ]);
  }
}
