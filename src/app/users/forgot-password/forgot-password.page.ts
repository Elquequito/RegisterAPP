import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  message: string = ''; // Inicializa la variable message

  constructor(private authService: AuthService) {}

  onResetPassword(email: HTMLInputElement) {
    const emailValue = email.value;
    if (emailValue) {
      this.authService.resetPassword(emailValue) // Asegúrate de que este método exista en tu AuthService
        .then(() => {
          this.message = 'Se ha enviado un enlace de restablecimiento de contraseña a tu correo.'; // Mensaje de éxito
        })
        .catch((error) => {
          this.message = 'Error al restablecer la contraseña: ' + error.message; // Mensaje de error
          console.error('Error al restablecer la contraseña:', error);
        });
    } else {
      this.message = 'Por favor, ingresa un correo electrónico.'; // Mensaje si no se ingresa un correo
    }
  }
}
