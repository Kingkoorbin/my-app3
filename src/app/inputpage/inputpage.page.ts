import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.page.html',
  styleUrls: ['./inputpage.page.scss'],
})
export class InputpagePage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }
  userInput1: any = '';
  userInput2: any = '';
  userName1: any = '';
  userName2: any = '';

  selectedValue: String = '';


  checkInput(){
    const userInput1 = document.getElementById('user-input1') as HTMLIonInputElement;
    const userInput2 = document.getElementById('user-input2') as HTMLIonInputElement;
    const userName1 = document.getElementById('user-name1') as HTMLIonInputElement;
    const userName2 = document.getElementById('user-name2') as HTMLIonInputElement;

    if(!userInput1.value || !userInput2.value || !userName1.value || !userName2.value){
      const alert = this.alertController.create ({message: 'Please Enter an Input. Thanks.', buttons: ['OK'],});
      alert.then((alert) => alert.present());
    }
    else {
      this.goToOutputPage();
    }

  }

  goToOutputPage() {
    const userInput1 = (document.getElementById('user-input1') as HTMLInputElement).value;
    const value1 = Number(userInput1);
    const userInput2 = (document.getElementById('user-input2') as HTMLInputElement).value;
    const value2 = Number(userInput2);
    const userName1 = (document.getElementById('user-name1') as HTMLIonInputElement).value;
    const userName2 = (document.getElementById('user-name2') as HTMLIonInputElement).value;
    const radbutton = (document.getElementById('selectedValue') as HTMLIonRadioGroupElement).value;

    const ValSum = value1 + value2;
    const Sub = value1 - value2;
    const Div = value1 / value2;
    const Multi = value1 * value2;
    const Mod = value1 % value2;

    this.navCtrl.navigateForward(['/outputpage', { radbutton, userInput1, userInput2, userName1, userName2, ValSum, Sub, Div, Multi, Mod },]);
  }

  ngOnInit() {
  }

}
