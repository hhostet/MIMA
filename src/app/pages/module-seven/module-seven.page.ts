import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-seven',
  templateUrl: './module-seven.page.html',
  styleUrls: ['./module-seven.page.scss'],
})
export class ModuleSevenPage implements OnInit {

  hideMe1: boolean = false;
  hideMe2: boolean = false;

  constructor() { }

  hide1() {
    this.hideMe1 = !this.hideMe1;
  }

  hide2() {
    this.hideMe2 = !this.hideMe2;
  }

  ngOnInit() {
  }

}
