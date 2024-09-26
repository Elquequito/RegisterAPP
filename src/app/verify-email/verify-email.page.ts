import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Asegúrate de que la ruta sea correcta
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  user$: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.getUser(); // Obtiene el usuario actual
  }

  onSendEmail() {
    this.authService.sendVerificationEmail().then(() => {
      console.log('Correo de verificación reenviado.');
    }).catch(error => {
      console.error('Error al enviar el correo de verificación:', error);
    });
  }
}
