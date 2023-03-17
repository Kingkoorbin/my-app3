import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.page.html',
  styleUrls: ['./inputpage.page.scss'],
})
export class InputpagePage implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }
  // userInput1: any = '';
  // userInput2: any = '';

  userInput1 = 0;
  userInput2 = 0;


  userName1: any = '';
  userName2: any = '';



  checkInput(){
    const userInput1 = document.getElementById('user-input1') as HTMLIonInputElement;
    const userInput2 = document.getElementById('user-input2') as HTMLIonInputElement;
    const userName1 = document.getElementById('user-name1') as HTMLIonTextareaElement;
    const userName2 = document.getElementById('user-name2') as HTMLIonTextareaElement;

    if(!userInput1.value || !userInput2.value || !userName1.value || !userName2.value ){
      const alert = this.alertController.create ({message: 'Please provide data in each field. Thanks.', buttons: ['OK'],});
      alert.then((alert) => alert.present());
    }
    else if(isNaN(Number(userInput1.value)) || isNaN(Number(userInput2.value))){
        const alert = this.alertController.create({
          message: 'Please Provide Numeric Number only. Thank You.',
          buttons: ['OK']
        });
        alert.then((alert) => alert.present());
    }
    else {
      this.goToOutputPage();
    }

  }

  checkData(){
    const userInput1 = (document.getElementById('user-input1') as HTMLIonInputElement).value;
    const value1 = Number(userInput1);
    const userInput2 = (document.getElementById('user-input2') as HTMLIonInputElement).value;
    const value2 = Number(userInput2);
    const userName1 = (document.getElementById('user-name1') as HTMLIonInputElement).value;
    const userName2 = (document.getElementById('user-name2') as HTMLIonInputElement).value;

    const ValSum = value1 + value2;
    const Sub = value1 - value2;
    const Div = value1 / value2;
    const Multi = value1 * value2;
    const Mod = value1 % value2;

    const alert = this.alertController.create({
      message: '' +ValSum + Sub + Div + Multi + Mod,
      buttons: ['OK']
    });
    alert.then((alert) => alert.present());

  }
  goToOutputPage() {
    const userInput1 = (document.getElementById('user-input1') as HTMLIonInputElement).value;
    const value1 = Number(userInput1);
    const userInput2 = (document.getElementById('user-input2') as HTMLIonInputElement).value;
    const value2 = Number(userInput2);
    const userName1 = (document.getElementById('user-name1') as HTMLIonInputElement).value;
    const userName2 = (document.getElementById('user-name2') as HTMLIonInputElement).value;

    const ValSum = value1 + value2;
    const Sub = value1 - value2;
    const Div = value1 / value2;
    const Multi = value1 * value2;
    const Mod = value1 % value2;

    const InputPageData = {
      queryParams: {
        userInput1: userInput1,
        userInput2: userInput2,
         userName1: userName1,
        userName2: userName2,
        ValSum: ValSum,
        Sub: Sub,
        Div: Div,
        Multi: Multi,
        Mod: Mod,
      },
    };

   this.navCtrl.navigateForward(['/outputpage'], InputPageData);
  }

  ngOnInit() {
  }

}
