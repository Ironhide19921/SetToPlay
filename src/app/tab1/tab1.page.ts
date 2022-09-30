import { Component } from '@angular/core';
import { SetlistService } from '../services/setlist.service';
// require('buffer').Buffer;
// import {} from 'dotenv';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private setlistService: SetlistService) {}

  authWithSpotify() {
    console.log('hola');
    // this.setlistService.getListsByBand().subscribe((resp) => {
    //   console.log(resp);
    // });
    // const config = {
    // clientId:'5bcf077c7fe94c3aa6ff2f84e6a7fec4',
    //   redirectUrl:,
    //   scopes:["streaming"],
    //   tokenExchangeUrl:,
    //   tokenRefreshUrl:,
    // }
  }
}
