import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {
  scannedCode: string | null = null;
  scanActive: boolean = false;

  constructor(private platform: Platform) { }

  ngOnInit() {
    // Para Android, desactiva el escáner si se minimiza la aplicación
    this.platform.pause.subscribe(() => {
      if (this.scanActive) {
        this.stopScan();
      }
    });
  }

  async startScan() {
    // Pedir permiso para usar la cámara
    const allowed = await BarcodeScanner.checkPermission({ force: true });
    if (allowed.granted) {
      this.scanActive = true;
      document.body.classList.add('scanner-active');

      const result = await BarcodeScanner.startScan(); // Empieza el escaneo
      if (result.hasContent) {
        this.scannedCode = result.content; // Aquí almacenas el resultado del escaneo
        this.scanActive = false;
        document.body.classList.remove('scanner-active');
      }
    } else {
      console.error('Permiso de cámara denegado');
    }
  }

  stopScan() {
    BarcodeScanner.stopScan(); // Detiene el escaneo
    this.scanActive = false;
    document.body.classList.remove('scanner-active');
  }
}
