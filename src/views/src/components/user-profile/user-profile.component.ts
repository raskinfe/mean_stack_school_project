import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { store } from 'src/store/store';
import { DOCUMENT } from '@angular/common';
import { ApiService } from 'src/services/api/api.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { PostService } from 'src/services/post/post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any;
  public _state: any;
  showTooltip: boolean = false;
  _file: string | any;
  imageUrl: string | undefined;
  message: string | any;
  _userOffers: any;
  pageNumber: number = 1;
  numberOfPages: any;
  perPage: number = 4;
  paginatedOffers: any;
  start: number = 0;
  end: number = this.perPage;
  error: string = '';
  old_password: string | undefined;
  new_password: string | undefined;
  repeat_password: string | undefined;
  constructor(
    @Inject(DOCUMENT) document: Document,
    private _api: ApiService,
    private router: Router,
    private _flashMsgSrvc: FlashMessagesService,
    private postservices: PostService
  ) {}

  async submit() {
    try {
      if (typeof this._file != 'undefined') {
        await this._api.uploadProfilePicture(
          this.user.id,
          this._state.authToken,
          this._file
        );
      }
      const response = await this._api.updateProfile(
        this.user.id,
        this._state.authToken,
        this.user
      );
      this._flashMsgSrvc.show('Succesfully updated!', {
        cssClass: 'alert-success',
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  onChange(event: any) {
    this._file = event.target.files[0];
  }

  async ngOnInit() {
    this._state = store.state;
    (
      await this._api.getProfile(
        this._state.user.id,
        this._state.authToken,
        this.user
      )
    ).subscribe((data: any) => {
      this.user = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        avatar: data.user.avatar,
      };

      if (this.user.avatar !== null) {
        this.imageUrl =
          this._state.apiHost + `/user/get-profile/${this.user.id}`;
      } else {
        this.imageUrl = '../../assets/images/dummy.jpg';
      }
    });

    const token: any = this._state.authToken;
    (await this._api.getOffersByUser(token)).subscribe((data: any) => {
      this._userOffers = data.posts;
      this.paginatedOffers = this.paginateOffers();
      this.numberOfPages = Math.ceil(this._userOffers.length / this.perPage);
    });
  }
  toggleTooltip() {
    this.showTooltip = !this.showTooltip;
  }

  fileUpload() {
    document.getElementById('avatar')?.click();
  }

  paginateOffers() {
    return this._userOffers.slice(this.start, this.end);
  }

  forward() {
    this.pageNumber++;
    this.start += this.perPage;
    this.end += this.perPage;
    this.ngOnInit();
  }

  back() {
    this.pageNumber--;
    this.start -= this.perPage;
    this.end -= this.perPage;
    this.ngOnInit();
  }

  onDelete() {
    const answer = confirm(
      'Are you sure? once you delete this account there is no way to recover it.'
    );
    if (answer) {
      try {
        this._api.deleteUser(this._state.user, this._state.authToken);
        localStorage.clear();
        window.location.reload();
        this._flashMsgSrvc.show('Successfully deleted', {
          cssClass: 'alert-success',
        });
      } catch (error) {
        this._flashMsgSrvc.show('Something went wrong please try again', {
          cssClass: 'alert-error',
        });
      }
    }
  }

  async onChangePassword() {
    if (this.new_password != this.repeat_password) {
      this.error = "Password doesn't match";
      setTimeout(() => {
        this.error = '';
      }, 2000);
      return;
    }
    if (!this.old_password || !this.new_password) {
      this.error = 'Please fill all the required fields';
      setTimeout(() => {
        this.error = '';
      }, 2000);
      return;
    }

    const payload = {
      old_password: this.old_password,
      new_password: this.new_password,
    };

    try {
      const resp = await this._api.updatePassword(
        this._state.user.id,
        payload,
        this._state.authToken
      );
      if (!resp.success) {
        this._flashMsgSrvc.show(resp.message, {
          cssClass: 'alert-error',
          timeout: 3000,
        });
        return;
      }

      this._flashMsgSrvc.show(resp.message, {
        cssClass: 'alert-success',
        timeout: 3000,
      });
      this.old_password = '';
      this.new_password = '';
      this.repeat_password = '';
    } catch (error) {
      this._flashMsgSrvc.show('Something went wrong please try again', {
        cssClass: 'alert-error',
        timeout: 3000,
      });
    }
  }

  async onDeleteOffer(id: string) {
    try {
      const resp = await this.postservices.destroyOffer(
        id,
        this._state.authToken
      );
      if (!resp.success) {
        this._flashMsgSrvc.show(resp.message, {
          cssClass: 'alert-error',
          timeout: 2000,
        });
        return;
      }
      this._flashMsgSrvc.show(resp.message, {
        cssClass: 'alert-success',
        timeout: 2000,
      });
      this.ngOnInit();
    } catch (error) {
      console.log(error);
    }
  }

  onEditOffer(id: string) {
    const filtedOffer = Object.entries(this._userOffers).filter(
      (offer: any) => offer[1]._id == id
    );
    this.router.navigateByUrl(`offers/${id}`, { state: filtedOffer[1] });
  }
}
