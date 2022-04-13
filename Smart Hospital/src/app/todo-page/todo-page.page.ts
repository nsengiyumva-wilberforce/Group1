import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { AlertController,ToastController } from '@ionic/angular';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.page.html',
  styleUrls: ['./todo-page.page.scss'],
})
export class TodoPagePage implements OnInit {

  
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: boolean;
  dataSend: string = "";
  
  constructor(private bluetoothSerial: BluetoothSerial, private alertController: AlertController,private toastCtrl: ToastController) {
    bluetoothSerial.enable();
  }

  ngOnInit(): void {
    
  }
  
  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    const unPair = [];
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      success.forEach((value, key) => {
        var exists = false;
        unPair.forEach((val2, i) => {
          if (value.id === val2.id) {
            exists = true;
          }
        });
        if (exists === false && value.id !== '') {
          unPair.push(value);
        }
      });
      this.unpairedDevices = unPair;
      this.gettingDevices = false;
    },
      (err) => {
        console.log(err);
      });
  
    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {
  
      });
    }
  
  success = (data) => {
    this.deviceConnected();
  }
  fail = (error) => {
    alert(error);
  }
  
  async selectDevice(id: any) {
  
    const alert = await this.alertController.create({
      header: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: () => {
            this.bluetoothSerial.connect(id).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    await alert.present();
  }
  
  deviceConnected() {
    this.bluetoothSerial.isConnected().then(success => {
      alert('Connected Successfullly');
    }, error => {
      alert('error' + JSON.stringify(error));
    });
  }
  
  async disconnect() {
    const alert = await this.alertController.create({
      header: 'Disconnect?',
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    await alert.present();
  }

  handleData(data) {
    this.showToast(data);
  }


  btnOnClicked() {
    this.dataSend ='ON';
    this.showToast(this.dataSend);

    this.bluetoothSerial.write(this.dataSend).then(success => {
      this.showToast(success);
    }, error => {
      this.showError(error)
    });
  }

  btnOffClicked() {
    this.dataSend ='OFF';
    this.showToast(this.dataSend);

    this.bluetoothSerial.write(this.dataSend).then(success => {
      this.showToast(success);
    }, error => {
      this.showError(error)
    });
  }

  async showError(error) {
    let alert = await this.alertController.create({
      header: 'Error',
      message: error,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  async showToast(msj) {
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 1000
    });
    await toast.present();

  }

}
