import { Component } from '@angular/core';
import {
	IonicPage,
	NavController,
	NavParams,
	ModalController
} from 'ionic-angular';

import { GeneroPage } from '../genero/genero';

//Modales
import { ModalAboutPage } from '../modal-about/modal-about';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	};

	login() {
		this.navCtrl.setRoot(GeneroPage);
	};

	openModal() {
		let modalAbout = this.modalCtrl.create(ModalAboutPage);
		modalAbout.present();
	};

}
