import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module'; // Importar el módulo de enrutamiento
import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule // Agregar el módulo de enrutamiento aquí
  ],
  declarations: [ForgotPasswordPage] // Declarar la página
})
export class ForgotPasswordPageModule {}
