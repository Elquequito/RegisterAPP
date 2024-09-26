import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) { }

  // Método para registrarse
  async signUp(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  // Método para iniciar sesión
  async signIn(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  // Método para obtener el usuario actual
  getUser(): Observable<any> {
    return this.afAuth.user; // Devuelve un observable del usuario
  }

  // Método para enviar el correo de verificación
  async sendVerificationEmail() {
    const user = await this.afAuth.currentUser;
    if (user) {
      await user.sendEmailVerification();
    }
  }

  // Método para cerrar sesión
  async signOut() {
    try {
      await this.afAuth.signOut(); // Cierra la sesión del usuario
    } catch (error) {
      console.error("Error al cerrar sesión:", error); // Maneja el error de cerrar sesión
    }
  }

  // Método para restablecer la contraseña
  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email); // Envía el correo de restablecimiento de contraseña
      return Promise.resolve(); // Resuelve la promesa
    } catch (error) {
      return Promise.reject(error); // Rechaza la promesa si hay un error
    }
  }
}
