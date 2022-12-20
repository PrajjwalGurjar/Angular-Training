import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
/**
 *
 */
warning:string='This is warning,You are in danger';
constructor() {
  
  
}
ngOnInit(): void {
  
}
getColor(){
  return 'red';
}
}
