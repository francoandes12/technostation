import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  title = "Techno Station!!";
  dj = "ILARIO ALICANTE";
  pais = "Italia";
  genero = "Techno";
  sello = "Cocoon";
  foto =
    "https://www.6amgroup.com/wp-content/uploads/2019/12/69966028_10157174449635353_6339814965225979904_n.jpg";
  setdelMes = "Hernan Cattaneo SUNSETSTREAM FULL Agosto 2020";
  trackDelMes = "Maceo Plex - Nu World";

  constructor() {}
}
