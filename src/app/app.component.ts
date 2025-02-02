import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo5';

  //Propiedades.
  nombreCliente = '';
  emailCliente = '';
  mensajeCliente = '';
  statusCliente = '';
  municipioCliente = '';
  autorizacionCliente = false; 

  enviado = false;

  formContacto = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    mensaje: new FormControl('',[
      Validators.required,
      Validators.maxLength(500),
    ]),
    status: new FormControl('',[
      Validators.required,
    ]),
    municipio: new FormControl(''),
    autorizacion: new FormControl(false),
  });

  //Método que se ejecuta cuando se envia el formulario.
  onSubmit(){
    this.enviado = true;
    if(this.formContacto.valid){
      this.nombreCliente = this.formContacto.value.nombre!;
      this.emailCliente = this.formContacto.value.email!;
      this.mensajeCliente = this.formContacto.value.mensaje!;
      this.statusCliente = this.formContacto.value.status!;
      this.municipioCliente = this.formContacto.value.municipio!;
      this.autorizacionCliente = this.formContacto.value.autorizacion!;
    }
   
  }
}
