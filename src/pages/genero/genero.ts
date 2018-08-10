import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeneroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-genero',
	templateUrl: 'genero.html',
})
export class GeneroPage {

	public imageM = '../../assets/imgs/genero/sex_mujer_off.png';
	public imageH = '../../assets/imgs/genero/sex_hombre_off.png';
	public m: boolean = false;
	public h: boolean = false;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad GeneroPage');
	}

	switchMujer() {
		if (!this.m && !this.h) {
			this.imageM = '../../assets/imgs/genero/sex_mujer_on.png';
			this.imageH = '../../assets/imgs/genero/sex_hombre_off.png';
		} else if (this.m && !this.h) {
			this.imageM = '../../assets/imgs/genero/sex_mujer_on.png';
			this.imageH = '../../assets/imgs/genero/sex_hombre_off.png';
		} else if (!this.m && this.h) {
			this.imageM = '../../assets/imgs/genero/sex_mujer_on.png';
			this.imageH = '../../assets/imgs/genero/sex_hombre_off.png';
		};
	};

	swicthHombre() {
		if (!this.h && !this.m) {
			this.imageH = '../../assets/imgs/genero/sex_hombre_on.png';
			this.imageM = '../../assets/imgs/genero/sex_mujer_off.png';
		} else if (this.h && !this.m) {
			this.imageH = '../../assets/imgs/genero/sex_hombre_on.png';
			this.imageM = '../../assets/imgs/genero/sex_mujer_off.png';
		} else if (!this.h && this.m) {
			this.imageH = '../../assets/imgs/genero/sex_hombre_on.png';
			this.imageM = '../../assets/imgs/genero/sex_mujer_off.png';
		};
	};
}
