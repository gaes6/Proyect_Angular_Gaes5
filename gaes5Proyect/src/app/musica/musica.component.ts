import { Component, OnInit } from '@angular/core';
declare var $: any;
declare let alertify:any;
@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  public visible: boolean;
  public album: Array<any>;
  constructor() {
    
    this.visible = false;
    this.album = [
      {
        "nameAlbum": "Black album",
        "visible": false,
        "autor": "James Hetfield",
        "imagenAlbum": "../../assets/imagenes/albumes/BlackAlbum metallica.jpg",
        "canciones": [
          { "cancion": "Enter Sandman", "duracion": "5:29" },
          { "cancion": "Sad but True", "duracion": "5:24" },
          { "cancion": "Holier Than Thou", "duracion": "3:47" },
          { "cancion": "The Unforgiven", "duracion": "6:26" },
          { "cancion": "Wherever I May Roam", "duracion": "6:42" },
          { "cancion": "Don't Tread on Me", "duracion": "3:59" },
          { "cancion": "Through the Never", "duracion": "4:01" },
          { "cancion": "Of Wolf and Man", "duracion": "4:16" },
          { "cancion": "The God That Failed", "duracion": "5:05" },
          { "cancion": "My Friend of Misery", "duracion": "6:47" },
          { "cancion": "The Struggle Within", "duracion": "3:51" }
        ]
      }, {
        "nameAlbum": "Black album",
        "visible": false,
        "autor": "James Hetfield",
        "imagenAlbum": "../../assets/imagenes/albumes/BlackAlbum metallica.jpg",
        "canciones": [
          { "cancion": "Enter Sandman", "duracion": "5:29" },
          { "cancion": "Sad but True", "duracion": "5:24" },
          { "cancion": "Holier Than Thou", "duracion": "3:47" },
          { "cancion": "The Unforgiven", "duracion": "6:26" },
          { "cancion": "Wherever I May Roam", "duracion": "6:42" },
          { "cancion": "Don't Tread on Me", "duracion": "3:59" },
          { "cancion": "Through the Never", "duracion": "4:01" },
          { "cancion": "Of Wolf and Man", "duracion": "4:16" },
          { "cancion": "The God That Failed", "duracion": "5:05" },
          { "cancion": "My Friend of Misery", "duracion": "6:47" },
          { "cancion": "The Struggle Within", "duracion": "3:51" }
        ]
      }, {
        "nameAlbum": "Black album",
        "visible": false,
        "autor": "James Hetfield",
        "imagenAlbum": "../../assets/imagenes/albumes/BlackAlbum metallica.jpg",
        "canciones": [
          { "cancion": "Enter Sandman", "duracion": "5:29" },
          { "cancion": "Sad but True", "duracion": "5:24" },
          { "cancion": "Holier Than Thou", "duracion": "3:47" },
          { "cancion": "The Unforgiven", "duracion": "6:26" },
          { "cancion": "Wherever I May Roam", "duracion": "6:42" },
          { "cancion": "Don't Tread on Me", "duracion": "3:59" },
          { "cancion": "Through the Never", "duracion": "4:01" },
          { "cancion": "Of Wolf and Man", "duracion": "4:16" },
          { "cancion": "The God That Failed", "duracion": "5:05" },
          { "cancion": "My Friend of Misery", "duracion": "6:47" },
          { "cancion": "The Struggle Within", "duracion": "3:51" }
        ]
      }, {
        "nameAlbum": "Black album",
        "visible": false,
        "autor": "James Hetfield",
        "imagenAlbum": "../../assets/imagenes/albumes/BlackAlbum metallica.jpg",
        "canciones": [
          { "cancion": "Enter Sandman", "duracion": "5:29" },
          { "cancion": "Sad but True", "duracion": "5:24" },
          { "cancion": "Holier Than Thou", "duracion": "3:47" },
          { "cancion": "The Unforgiven", "duracion": "6:26" },
          { "cancion": "Wherever I May Roam", "duracion": "6:42" },
          { "cancion": "Don't Tread on Me", "duracion": "3:59" },
          { "cancion": "Through the Never", "duracion": "4:01" },
          { "cancion": "Of Wolf and Man", "duracion": "4:16" },
          { "cancion": "The God That Failed", "duracion": "5:05" },
          { "cancion": "My Friend of Misery", "duracion": "6:47" },
          { "cancion": "The Struggle Within", "duracion": "3:51" }
        ]
      }
    ]
  }

  ngOnInit(): void {
    $('.toast').toast({
      autohide : true
    })
  }

  hideOrShow(itemSeleccionado:number) {
    for (var i:number=0;i <= this.album.length;i++) {
      if(itemSeleccionado == i ){
        if(this.album[i].visible){
          this.album[i].visible = false;
        }else{
          this.album[i].visible = true;
        }
      }
    }
  }
  mensajeEnvio(album:number,cancion:number){
    console.log("Album: " + album ,"Cancion: " + cancion);
    alertify.success('Canción enviada exitosamente');
  }

}
