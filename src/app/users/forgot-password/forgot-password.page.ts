import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  constructor(private authService: AuthService) {}

  onResetPassword(email: HTMLInputElement) {
    const emailValue = email.value;
    if (emailValue) {
      this.authService.resetPassword(emailValue) // Asegúrate de que este método exista en tu AuthService
        .then(() => {
          // Manejar éxito, como redirigir o mostrar un mensaje
        })
        .catch((error) => {
          // Manejar errores
          console.error('Error al restablecer la contraseña:', error);
        });
    }
  }
}
