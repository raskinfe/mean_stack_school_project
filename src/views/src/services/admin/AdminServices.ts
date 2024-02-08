import { Injectable } from '@angular/core';
import { store } from 'src/store/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  _state: any = store.state;
  private headers: Headers | any = new Headers();

  constructor(private http: HttpClient) {
    this.headers.set('content-type', 'application/json');
  }

  getUsers(token: any) {
    const path = '/admin/getAllUsers';
    const url = this._state.apiHost + path;
    console.log(token);

    return this.http.get(url, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
  }

  storeIssues(payload: any) {
    const path = '/admin/issues';
    const url = this._state.apiHost + path;
    return this.http.post(url, payload);
  }

  updateRole(id: string, role: string, token: any) {
    const path = `/admin/update-role/${id}`;
    const url = this._state.apiHost + path;
    const payload = { role };
    return this.http.post(url, payload, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
  }

  destroyUser(id: string, token: any) {
    const path = `/user/destroy`;
    const url = this._state.apiHost + path;
    const payload = { id };
    return this.http.delete(url, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: payload,
    });
  }

  getOffers() {
    const path = '/posts';
    const url = this._state.apiHost + path;
    return this.http.get(url);
  }
}
