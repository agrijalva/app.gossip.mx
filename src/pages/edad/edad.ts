import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides  } from 'ionic-angular';

/**
 * Generated class for the EdadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edad',
  templateUrl: 'edad.html',
})
export class EdadPage {
  @ViewChild(Slides) slides: Slides;

  edades = [ {edad: 12},{edad: 13},{edad: 14},{edad: 15},{edad: 16},{edad: 17},{edad: 18},{edad: 19},{edad: 20},
    {edad: 21},{edad: 22},{edad: 23},{edad: 24},{edad: 25},{edad: 26},{edad: 27},{edad: 28},{edad: 29},{edad: 30},
    {edad: 31},{edad: 32},{edad: 33},{edad: 34},{edad: 35},{edad: 36},{edad: 37} ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdadPage');
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

}
