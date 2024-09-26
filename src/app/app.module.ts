import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Importar AngularFire y el módulo de autenticación
import { AngularFireModule } from '@angular/fire/compat'; // Importación del módulo de AngularFire
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // Importación del módulo de autenticación

// Importar la configuración de Firebase
import { environment } from '../environments/environment'; // Asegúrate de que la ruta sea correcta

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // Inicializa Firebase
    AngularFireAuthModule // Importa el módulo de autenticación
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } // Manejo de reutilización de rutas
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
