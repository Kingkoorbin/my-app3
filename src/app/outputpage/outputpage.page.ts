import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-outputpage',
  templateUrl: './outputpage.page.html',
  styleUrls: ['./outputpage.page.scss'],
})
export class OutputpagePage implements OnInit {

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) { }

  userInput1: number = parseInt('user-input1');
  userInput2: number = parseInt('user-input2');
  ValSum: number = parseInt('ValSum');
  Sub: number = parseInt('Sub');
  Div: number = parseInt('Div');
  Multi: number = parseInt('Multi');
  Mod: number = parseInt('Mod');

  userName1: any = 'user-name1';
  userName2: any = 'user-name2';

  goToInputPage() {
    this.navCtrl.navigateBack(['/inputpage']);
    this.clearTextArea();
  }
  clearTextArea() {
    const textarea1 = document.querySelector('#user-input1') as HTMLIonInputElement;
    textarea1.value = '';
    const textarea2 = document.querySelector('#user-input2') as HTMLIonInputElement;
    textarea2.value = '';
    const textarea3 = document.querySelector('#user-name1') as HTMLIonTextareaElement;
    textarea1.value = '';
    const textarea4 = document.querySelector('#user-name2') as HTMLIonTextareaElement;
    textarea2.value = ''; `  `
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userInput1 = params['userInput1'];
      this.userInput2 = params['userInput2'];
      this.userName1 = params['userName1'];
      this.userName2 = params['userName2'];
      this.ValSum = params['ValSum'];
      this.Sub = params['Sub'];
      this.Div = params['Div'];
      this.Multi = params['Multi'];
      this.Mod = params['Mod'];
    });
  }

}
