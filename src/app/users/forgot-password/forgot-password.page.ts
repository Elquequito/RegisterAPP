import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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
      this.authService.resetPassword(emailValue)
        .then(() => {
          // Manejar éxito
        })
        .catch((error) => {
          console.error('Error al restablecer la contraseña:', error);
        });
    }
  }
}
