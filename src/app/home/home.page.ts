import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  @ViewChild(IonModal)
  modal!: IonModal;

  onClickUpdate() {
    this.modal.dismiss(null, 'onclickupdate');
  }

  onClickView() {
    this.modal.dismiss(null, 'onclickview');
  }

  onClickDelete() {
    this.modal.dismiss(null, 'onclickdelete');
  }

  onclickAdd() {
    this.modal.dismiss(null, 'onclickAdd');
  }

}
