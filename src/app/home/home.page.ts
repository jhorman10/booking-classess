import { OverlayEventDetail } from '@ionic/core/components';
import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message!: string;
  constructor() {}

  @ViewChild(IonModal) update!: IonModal;
  @ViewChild(IonModal) add!: IonModal;
  @ViewChild(IonModal) view!: IonModal;

  titleForPage = 'Booking Class App';
  subTitleForPage = 'Class List';

  listOfClasses = ['Math', 'Spanish', 'Music'];

  lblForModalUpdate: string = 'Update Class';
  lblForModalView: string = 'Current Class';
  lblForModalAdd: string = 'Add Class';

  success = 'success';
  secondary = 'secondary';
  warning = 'warning';

  index = 0;

  onclickAdd() {
    console.log('onclickAdd');
    this.add.dismiss(null, 'onclickAdd');
  }

  onClickUpdate(i: number) {
    this.update.dismiss(null, `onClickUpdate-${i}`);
  }

  onClickView(i: number) {
    console.log(`onclickview-${i}`);
    this.view.dismiss(null, `onclickview-${i}`);
  }

  onClickDelete() {
    console.log('onClickDelete');
  }

  addModal(e: EventListener) {
    console.log('addModal');
  }

  updateModal(e: EventListener) {
    console.log('updateModal');
  }

  viewModal(e: EventListener) {
    console.log('viewModal');
  }

  cancelModal(e: EventListener) {
    console.log('cancelModal');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
