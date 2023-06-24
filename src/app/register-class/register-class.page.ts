import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { iClass } from '../models/class';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.page.html',
  styleUrls: ['./register-class.page.scss'],
})
export class RegisterClassPage implements OnInit {
  @Input() modal!: IonModal;
  @Input() title!: string;
  @Input() btnColor!: string;
  @Input() index!: number;

  @Output() addClass = new EventEmitter();
  @Output() updateClass = new EventEmitter();
  @Output() viewClass = new EventEmitter();
  @Output() cancel = new EventEmitter();

  lblForModalUpdate: string = 'Update Class';
  lblForModalView: string = 'Current Class';
  lblForModalAdd: string = 'Add Class';

  newClass: iClass = {
    name: '',
    from: '',
    to: '',
  };

  constructor() {}

  ngOnInit() {}

  onClick() {
    switch (this.title) {
      case this.lblForModalAdd:
        this.onClickAdd();
        break;
      case this.lblForModalUpdate:
        this.onClickUpdate();
        break;
      case this.lblForModalView:
        this.onClickView();
        break;
    }
  }

  onClickAdd() {
    console.log(this.title);
    this.addClass.emit(this.modal.dismiss(null, this.title));
  }

  onClickUpdate() {
    this.updateClass.emit(this.modal.dismiss(null, this.title));
  }

  onClickView() {
    console.log(this.title);
    this.viewClass.emit(this.modal.dismiss(null, this.title));
  }

  onClickCancel() {
    console.log('cancel - ', this.title);
    this.cancel.emit(this.modal.dismiss(null, this.title));
  }
}
