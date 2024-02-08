import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { store } from 'src/store/store';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  headers = new Headers();
  constructor(private _httpClient: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  getMessages(reciever: string, token: string, sender: any = null) {
    const path = `/messages/${reciever}&${sender}`;
    const url = store.state.apiHost + path;
    // this.headers?.set("Authorization", token);
    // return sendRequest(url, 'GET', "", this.headers);

    return this._httpClient.get(url, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  }
}
