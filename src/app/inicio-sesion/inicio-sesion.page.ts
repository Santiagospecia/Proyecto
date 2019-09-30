import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServicioService } from './servicio.service';

/* conectamos el servicio con el componente*/

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  constructor(private proveedorService: ServicioService) {
  }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault();
    this.proveedorService.obtenerDatos(username, password).subscribe(
      res => {
        console.log(res);
       },
       error => {
         console.error(error);
       }
     );

  }

  /*he llamado al método que acabamos de crear en el ngOnInit
  para que se ejecute al inicio con unos datos de ejemplo
  para comprobar que el servicio realiza bien la petición http.*/
}
