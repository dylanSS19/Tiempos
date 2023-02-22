import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginServiceService } from 'src/app/Servicios/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private Servicios: LoginServiceService, private router: Router){

  }



 
  ValidarExistenciaUsuario = this.builder.group({
    NomUsuario: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    contrasena: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(8)]))
  })

  ProcValidarExistenciaUsuario(){
    // if(this.ValidarExistenciaUsuario.valid){
    //   this.Servicios.CargarUsuarioLogin(this.ValidarExistenciaUsuario.value.NomUsuario).subscribe(rest=>{
    //     if(rest.usuarios[0].nombre != undefined){
    //       this.toastr.success('usuario exitoso');
    //       this.router.navigate(['menu'])
    //     }
        
    //   })
    // }else{
    //   this.toastr.error('error, intente nuevamente')
    // }
console.log(this.ValidarExistenciaUsuario.value.NomUsuario);
console.log(this.ValidarExistenciaUsuario.value.NomUsuario);
    if(this.ValidarExistenciaUsuario.value.NomUsuario === "dsalazar"){
      this.toastr.success('usuario exitoso');
      this.router.navigate(['menu']);

    }else{
      this.toastr.error('error, intente nuevamente');
    }

  }

}
