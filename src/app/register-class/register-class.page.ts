import { Component, OnInit } from '@angular/core';
import { iClass } from '../models/class';


@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.page.html',
  styleUrls: ['./register-class.page.scss'],
})
export class RegisterClassPage implements OnInit {

  newClass: iClass = {
    name:'',
    from: '',
    to: '',
  }

  constructor() { }

  ngOnInit() {
  }

}
