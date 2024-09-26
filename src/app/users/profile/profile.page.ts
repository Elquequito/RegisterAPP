import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any; // Asegúrate de que el tipo sea correcto según tu implementación
  uid: string; // Asumiendo que UID es un string

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      this.user = user;
      this.uid = user?.uid; // Asegúrate de asignar el UID correctamente
    });
  }

  salir() {
    this.authService.signOut().then(() => {
      // Lógica adicional después de cerrar sesión, como redirigir a la página de inicio de sesión
      console.log("Sesión cerrada exitosamente");
    }).catch(error => {
      console.error("Error al cerrar sesión:", error);
      // Manejar el error según sea necesario
    });
  }
  

  openMenu() {
    // Lógica para abrir el menú
  }
}
