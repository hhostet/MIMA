import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-ten',
  templateUrl: './module-ten.page.html',
  styleUrls: ['./module-ten.page.scss'],
})
export class ModuleTenPage implements OnInit {

  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  hideMe4: boolean = false;

  constructor() { }

  hide1() {
    this.hideMe1 = !this.hideMe1;
  }

  hide2() {
    this.hideMe2 = !this.hideMe2;
  }

  hide3() {
    this.hideMe3 = !this.hideMe3;
  }

  hide4() {
    this.hideMe4 = !this.hideMe4;
  }

  ngOnInit() {
  }

}
