import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  constructor(private authService: AuthService) { }

  async onLogin(email: string, password: string) {
    try {
      await this.authService.signIn(email, password);
      // Redirigir al usuario después del inicio de sesión, si es necesario
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error (mostrar mensaje, etc.)
    }
  }
}
