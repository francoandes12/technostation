import { Injectable } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
@Injectable({
  providedIn: "root",
})
export class DjService {
  dj: any[] = [
    {
      nombre: "Maceo Plex",
      pais: "USA",
      genero: "Techno",
      fotoUrl:
        "https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2014/05/12202108/iCbhTOuLwJtl0so2Oe2BDCVOqeA8e9AGBCcZIjWo-972x597.jpeg",
      track: "Conjure Dreams",
      videoId: "b2RcZQNMy5s",
      playlist: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2h7ny3",
      playlistYt: "",
    },
    {
      nombre: "Tale of Us",
      pais: "Italia",
      genero: "Melodic Techno",
      track: "North Star",
      videoId: "ZBM3DCf-t-M",
      fotoUrl:
        "https://djmag.es/wp-content/uploads/sites/10/2017/08/tale-of-us-548.jpg",
      playlist: "https://open.spotify.com/playlist/2ReRLq78x2EAc4h4kPdsYW",
      playlistYt:
        "https://www.youtube.com/watch?v=y3VcwaxJzhQ&list=RDEM_hcadmdtJ20fX5wt2U8JeQ&start_radio=1&ab_channel=BoilerRoom",
    },
    {
      nombre: "Stephan Bodzin",
      pais: "Alemania",
      genero: "Melodic Techno",
      track: "Singularity",
      videoId: "AaxFuXpcQmE",
      fotoUrl:
        "https://www.diariodealmeria.es/2018/12/12/ocio/Stephan-Bodzin-productor-Bremen-embajador_1308779144_92404663_667x375.jpg",
      playlist: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1meuUV",
      playlistYt:
        "https://www.youtube.com/watch?v=AaxFuXpcQmE&list=RDEMc1cjkF7YKhkMXZVXQH8R0g&start_radio=1&ab_channel=STEPHANBODZIN",
    },
    {
      nombre: "Jamie Jones",
      pais: "Uk",
      genero: "Tech-House",
      track: "Hungry for the power (Jamie Jones remix)",
      videoId: "uwQT-r-lXWg",
      fotoUrl:
        "https://djmag.com/sites/default/files/styles/djmag_landscape/public/article/image/jamie-jones-cover3-web.jpg?itok=Jg2vAO5t",
      playlist: "https://open.spotify.com/playlist/4vhsTI2GS1QnMHaRUhEPmS",
      playlistYt:
        "https://www.youtube.com/watch?v=AGdA7cmSkFk&list=RDEM758bgXMpvzEaNZpsHSVPPw&start_radio=1&ab_channel=BoilerRoom",
    },
  ];

  constructor() {}
  obtenerDjs() {
    return this.dj;
  }
  obtenerUno(i) {
    return this.dj[i];
  }
}
