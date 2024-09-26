import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordPage } from './forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPage // Ruta para la página
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Configurar el enrutamiento
  exports: [RouterModule]
})
export class ForgotPasswordPageRoutingModule {}
