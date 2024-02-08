import { Injectable } from '@angular/core';
import { sendRequest } from 'src/helpers/helpers';
import { store } from 'src/store/store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  _state: any | undefined;
  _headers: Headers = new Headers();

  constructor(private http: HttpClient) {
    this._state = store.state;
    this._headers.append('Content-type', 'application/json');
  }

  getPosts() {
    const url = this._state.apiHost + '/posts';
    return sendRequest(url, 'GET', '', this._headers);
  }

  getPostById(id: string) {
    const url = this._state.apiHost + `/post/${id}`;
    return sendRequest(url, 'GET', '', this._headers);
  }

  async storePost(post: object | any) {
    post.user_id = this._state.user.id;
    post.user_name = this._state.user.name;
    const formData = new FormData();
    Object.keys(post).forEach((key) => {
      formData.append(key, post[key]);
    });
    const path = '/post/save';
    const url = this._state.apiHost + path;
    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    return await (await fetch(url, requestOptions)).json();
  }

  destroyOffer(id: string, token: any) {
    const path = `/post/${id}`;
    const url = this._state.apiHost + path;
    this._headers.set('Authorization', token);
    return sendRequest(url, 'DELETE', '', this._headers);
  }

  async uploadMoreImages(
    id: string,
    token: any,
    image: any,
    existingImages: any = ''
  ) {
    const path = `/post/update-image/${id}`;
    const url = this._state.apiHost + path;
    this._headers.set('Authorization', token);
    const formData = new FormData();
    if (existingImages) {
      existingImages.forEach((img: any) => {
        formData.append('img', img);
      });
    }
    formData.append('posts', image);
    const requestOptions = {
      method: 'PUT',
      body: formData,
    };
    return await (await fetch(url, requestOptions)).json();
  }

  update(id: string, token: any, payload: any) {
    const path = `/post/update/${id}`;
    const url = this._state.apiHost + path;
    return this.http.request('PUT', url, {
      body: JSON.stringify(payload),
      headers: {
        Authorization: token,
        'Content-type': 'application/json',
      },
    });
  }

  getCountByCategory(token: string) {
    const path = '/category/get-count';
    const url = this._state.apiHost + path;

    return this.http.get(url, {
      headers: {
        Authorization: token,
        'Content-type': 'application/json',
      },
    });
  }
}
