import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  ViewController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-about',
  templateUrl: 'modal-about.html',
})
export class ModalAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAboutPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
