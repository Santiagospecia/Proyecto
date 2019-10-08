import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServicioService } from './servicio.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validator } from 'validator';
import { CustomFormsModule } from 'ng2-validation'; // npm install ng2-validation --save
import { RouterLink, RouterModule} from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
import { Tab1Page } from '../tab1/tab1.page';







/* formcontrol rastrea el valor y el estado de validez de un control de forma angular.
Coincide con un control de formulario HTML, como una entrada o un selector.*/



/* conectamos el servicio con el componente*/

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  isLogged: boolean;

  error_message = {
    'iUsername': [
      {type: 'required', message: 'Ingresar un usuario valido.'},
      {type: 'minLenght', message: 'minimo 5 caracteres'}

    ],
    'iPassword': [
      {type: 'required', message: 'Contraseña requerida.'},
      {type: 'minLenght', message: 'minimo 6 caracteres'}
    ]
  };

  constructor(private proveedorService: ServicioService, private formBuilder: FormBuilder, public navCtlr: NavController) {
    this.loginForm = this.formBuilder.group({
      iUsername: ['', [Validators.required, Validators.minLength(5)]],
      iPassword: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  ngOnInit() {
  }

  // saveData() { console.log(this.loginForm.value); } // para acceder a los campos del formulario mas facil.
  get f() { return this.loginForm.controls; }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault();
    this.proveedorService.obtenerDatos(username, password).subscribe(
      res => {
        console.log(res);
        this.navCtlr.navigateRoot('/questions');
       },
       error => {
         console.error(error);
       },
      () => {
      }// verificacion del login
     );

  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // tslint:disable-next-line: no-unused-expression
    ('SUCCESS!! \n\n' + JSON.stringify(this.loginForm.value));
}
}
