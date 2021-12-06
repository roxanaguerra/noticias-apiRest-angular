import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listNoticias: any[] = [];

  constructor(private _noticiasService: NoticiaService){
  }

  buscarNoticias(parametros: any){
    console.log("Soy el padre App Component: ", parametros);

    this._noticiasService.getNoticias(parametros).subscribe(data => {
      console.log("Data: ", data);
      this.listNoticias = data.articles;
    });
  }
}
