import { DialogService } from './../shared/services/dialog.service';
import { AuthService } from './../shared/services/auth-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public logoName = 'mad labs';
  public authentication = false;

  constructor(
    private authService: AuthService,
    private dialog: DialogService
  ) {
    this.authService.user.subscribe(auth => {
      if (auth) {
        this.authentication = true;
      } else {
        this.authentication = false;
      }
    })
  }

  ngOnInit() {
  }

  setRouterParam(location) {
    this.authService.setRouterParam(location);
  }

  logout() {
    this.authService.logout();
  }

}
