import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-screen',
  templateUrl: './alert-screen.page.html',
  styleUrls: ['./alert-screen.page.scss'],
})
export class AlertScreenPage implements OnInit {

  public alertMode: any;
  public loopMode: any;
  constructor(private nativeAudio: NativeAudio, private vibration: Vibration, private alert: AlertController) {
    this.setRingtone();
  }
ngOnInit(): void {
  
}
  setRingtone() {
    // Preload the audio track 
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/notification_ring/abc.mp3');
  }


  async createAlert() {
      this.loopMode == 'once' ? this.playSingle() : this.playLoop()
  }

  playSingle() {
    this.nativeAudio.play('uniqueId1').then(() => {
      console.log('Successfully played');
      this.showAlert();
    }).catch((err) => {
      console.log('error', err);
    });
  }

  playLoop() {
    this.nativeAudio.loop('uniqueId1').then(() => {
      console.log('Successfully played');
      this.showAlert();
    }).catch((err) => {
      console.log('error', err);
    });
  }

  async showAlert() {
    const cancelAlert = await this.alert.create({
      header: 'User Alert',
      message: 'You just played alert with ' + this.alertMode + ' , and played it ' + `${this.loopMode == 'once' ? 'just once' : 'on loop'}`,
      buttons: [
        {
          text: 'Ok, great!',
          handler: async () => {
            
            
              this.nativeAudio.stop('uniqueId1');

            cancelAlert.dismiss();
          }
        }
      ]
    });
    cancelAlert.present();
  }

}
