import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    private http: HttpClient
    ) { console.log(' Hello Service ');
   }


   obtenerDatos(username: string, password: string) { /*Funcion para tomar los datos*/
    const parameters = new HttpParams();
    const encabezado = new HttpHeaders();
    encabezado.set('Access-Control-Allow-Credentials', 'true');
    encabezado.set('Access-Control-Allow-Origin', '*');
    parameters.set('username', username);
    parameters.set('password', password);
    const ruta = 'http://3.14.63.150:8080/loginUser?username=' + username + '&password=' + password;
    console.log(ruta);
    return this.http.get(ruta, {headers: encabezado});
    // ,
    // { params: parameters}); /* dentro de las comillas vamos a tomar el enlace donde esta el json*/
    // return this.http.get(username);
    // return this.http.get('http://google.com.ar');
}
}
