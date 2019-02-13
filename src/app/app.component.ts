import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'L_MTC2019';

  loadedAccess = 'admin'
  onNavigate(access: string) {
    this.loadedAccess = access;
  }
}
