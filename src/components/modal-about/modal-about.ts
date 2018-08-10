import { Component } from '@angular/core';

/**
 * Generated class for the ModalAboutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal-about',
  templateUrl: 'modal-about.html'
})
export class ModalAboutComponent {

  text: string;

  constructor() {
    console.log('Hello ModalAboutComponent Component');
    this.text = 'Hello World';
  }

}
