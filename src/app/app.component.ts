import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  myName = "Raja babu"

  Keyupmethod(event:any){
    console.log(event)
  }

  login(role:any){
    localStorage.setItem("role",role)
  }
}