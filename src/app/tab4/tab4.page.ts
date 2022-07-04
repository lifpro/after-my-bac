import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  image = '../assets/img/photo.jpg';
  constructor(
    public asc: ActionSheetController,
    private camera: Camera,
    private router: Router,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }
  async addPhoto() {
    const actionSheet = await this.asc.create({
      header: 'Choisir une photo de profil',
      buttons: [{
        text: 'Caméra',
        icon: 'camera',
        handler: () => {
          this.addPhotoFromCamera();
        }
      }, {
        text: 'Galerie',
        icon: 'images',
        handler: () => {
          this.addPhotoFromGalerie();
        }
      },
      {
        text: 'Annuler',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Annuler');
        }
      }]
    });
    await actionSheet.present();
  }

  async addPhotoFromGalerie() {
    const base64 = await this.captureImageGalerie();
    this.createUploadTask(base64);
  }

  async addPhotoFromCamera() {
    const base64 = await this.captureImageCamera();
    this.createUploadTask(base64);
  }
  createUploadTask(file: string): void {
    this.image = 'data:image/jpg;base64,' + file;
  }
  async captureImageGalerie() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  async captureImageCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }
  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });

  }
}
