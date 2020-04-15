import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-zero',
  templateUrl: './module-zero.page.html',
  styleUrls: ['./module-zero.page.scss'],
})
export class ModuleZeroPage implements OnInit {
  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
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

  ngOnInit() {
  }
  

}
