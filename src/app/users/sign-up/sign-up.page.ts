import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  constructor(private authService: AuthService) { }

  async onRegister(email: string, password: string) {
    try {
      await this.authService.signUp(email, password);
      // Puedes redirigir al usuario después del registro si lo deseas
    } catch (error) {
      console.error('Error al registrarse:', error);
      // Maneja el error aquí (puedes mostrar un mensaje al usuario)
    }
  }
}
