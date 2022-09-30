import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SetlistService {
  constructor(private http: HttpClient) {}

  async getListsByBand() {
    try {
      const url =
        'https://api.setlist.fm/rest/1.0/search/setlists?artistName=jinjer';
      const headers = new HttpHeaders({
        'x-api-key': '2kor5g0UzDT_ae6cfQ6e_27Dd92wMkXr2ELG',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      });
      const response = await this.http.get(url, { headers });
      console.log('response:', response);
    } catch (error) {
      console.log('error:', error);
    }
    // return this.http.get(
    //   'https://api.setlist.fm/rest/1.0/search/setlists?artistName=jinjer'
    // );
  }
}
