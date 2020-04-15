import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-one',
  templateUrl: './module-one.page.html',
  styleUrls: ['./module-one.page.scss'],
})
export class ModuleOnePage implements OnInit {
  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  hideMe4: boolean = false;
  hideMe5: boolean = false;
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

  hide5() {
    this.hideMe5 = !this.hideMe5;
  }
  
  ngOnInit() {
  }

}
