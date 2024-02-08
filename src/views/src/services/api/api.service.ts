import { Injectable } from '@angular/core';
import { sendRequest } from 'src/helpers/helpers';
import { store } from 'src/store/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _headers = new Headers();
  constructor(private _httpClient: HttpClient) {
    this._headers.append('Content-Type', 'application/json');
  }

  registerUser(user: any) {
    const path = '/user/register';
    const url = store.state.apiHost + path;
    return sendRequest(url, 'POST', user, this._headers);
  }

  authenticateUser(user: any) {
    const path = '/user/login';
    const url = store.state.apiHost + path;
    return sendRequest(url, 'POST', user, this._headers);
  }

  async getProfile(id: any, token: any, user: any = '') {
    const path = `/user/profile/${id}`;
    const url = store.state.apiHost + path;
    this._headers.append('Authorization', token);

    return this._httpClient.get(url, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  }

  async uploadProfilePicture(_id: string, token: string, file: any) {
    const path = `/user/set-profile/${_id}`;
    const url = store.state.apiHost + path;
    const _headers = new Headers();
    _headers.append('Authorization', token);
    const formdata = new FormData();
    formdata.append('avatar', file, file.name);
    const requestOptions = {
      method: 'POST',
      headers: _headers,
      body: formdata,
    };

    return await (await fetch(url, requestOptions)).json();
  }

  async updateProfile(id: string, token: string, user: any) {
    const path = `/user/update-profile/${id}`;
    const url = store.state.apiHost + path;
    this._headers.set('Authorization', token);
    return await sendRequest(url, 'PUT', user, this._headers);
  }

  async getOffersByUser(token: string) {
    const path = `/posts/${store.state.user.id}`;
    const url = store.state.apiHost + path;
    return this._httpClient.get(url, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      responseType: 'json',
    });
  }

  deleteUser(user: any, token: any) {
    const path = `/user/destroy`;
    const url = store.state.apiHost + path;
    this._headers.set('Authorization', token);
    return sendRequest(url, 'DELETE', user, this._headers);
  }

  updatePassword(id: any, payload: any, token: any) {
    const path = `/user/update-password/${id}`;
    const url = store.state.apiHost + path;
    this._headers.set('Authorization', token);
    return sendRequest(url, 'PUT', payload, this._headers);
  }

  resetPassword(email: string) {
    const path = `/user/reset-password/${email}`;
    const url = store.state.apiHost + path;
    return sendRequest(url, 'GET', '', this._headers);
  }
}
