import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  
  username:string="";
  /**
   *
   */
  constructor() {
    console.log('This is constructor');

  }
  ngOnInit(): void {
    
  }

}