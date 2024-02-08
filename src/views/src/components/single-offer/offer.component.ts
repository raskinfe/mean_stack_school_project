import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/services/post/post.service';
import { ActivatedRoute } from '@angular/router';
import { store } from 'src/store/store';
import { ApiService } from 'src/services/api/api.service';
import { Socket } from 'ngx-socket-io';
import { FlashMessagesService } from 'flash-messages-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-single-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  _offer: object | any;
  _state: object | any;
  _offered_by: any;
  message: string | undefined;
  description: string | undefined;
  price: number | undefined;
  title: string | undefined;
  image: File | undefined;
  isActive = 0;
  imageLength = 0;

  constructor(
    private _router: Router,
    private _routerActivated: ActivatedRoute,
    private _postServce: PostService,
    private _api: ApiService,
    private socket: Socket,
    private flashMessages: FlashMessagesService,
    @Inject(DOCUMENT) document: Document
  ) {
    this._state = store.state;
  }

  async ngOnInit() {
    if (Object.keys(history.state).length <= 1) {
      const id = this._routerActivated.snapshot.params['id'];
      const offer = await this._postServce.getPostById(id);
      this._offer = offer.post;
    } else {
      this._offer = history.state;
    }

    (
      await this._api.getProfile(this._offer.user_id, this._state.authToken)
    ).subscribe((data: any) => {
      this._offered_by = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        avatar: data.user.avatar,
      };
    });
    this.price = this._offer.price;
    this.description = this._offer.description;
    this.title = this._offer.title;
    this.imageLength = this._offer.image.length;
  }

  imageUrl(image: string) {
    return this._state?.apiHost + `/post/get-post-image/${image}`;
  }

  sendMessage() {
    const reciever = this._offered_by.id;
    const sender = this._state.user.id;
    this.socket.emit('private message', {
      reciever,
      sender,
      message: this.message,
    });
    this.flashMessages.show('successfully sent', { cssClass: 'alert-success' });
    this.message = '';
  }

  onUploadMore() {
    document.getElementById('image')?.click();
  }

  onChange(event: any) {
    this.image = event.target.files[0];
    let existingImages: any[] = [];
    this._offer.image.forEach((img: any) => {
      existingImages.push(img);
    });
    try {
      const resp = this._postServce.uploadMoreImages(
        this._offer._id,
        this._state.authToken,
        this.image,
        existingImages
      );
      resp.then((success) => {
        this.flashMessages.show(success.message, {
          cssClass: 'alert-success',
          timeout: 2000,
        });
        this.ngOnInit();
      });
    } catch (error: any) {
      console.log(error);
      this.flashMessages.show(error.message, {
        cssClass: 'alert-error',
        timeout: 2000,
      });
    }
  }

  slideBackward() {
    this.isActive--;
  }
  slideForward() {
    this.isActive++;
  }
  async onUpdateOffer(id: string) {
    const payload = {
      title: this.title,
      description: this.description,
      price: this.price?.toString(),
    };
    try {
      this._postServce
        .update(id, this._state.authToken, payload)
        .subscribe((data: any) => {
          if (data.success) {
            this.flashMessages.show('updated successfully', {
              cssClass: 'alert-success',
              timeout: 2000,
            });
            this.ngOnInit();
          } else {
            this.flashMessages.show(data.message, {
              cssClass: 'alert-error',
              timeout: 2000,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
}
