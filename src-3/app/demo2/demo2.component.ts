import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit{

  show: boolean = false;
  clicks: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
    this.clicks.push((new Date()).toISOString());
  }
  getColor(i: number){
    return i >= 4 ? 'blue' : '';
  }
}
