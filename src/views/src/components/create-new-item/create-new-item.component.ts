import { Component, Inject } from '@angular/core';
import { categories } from 'src/store/categoryRepository';
import { DOCUMENT } from '@angular/common';
import { PostService } from 'src/services/post/post.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss'],
})
export class CreateNewItemComponent {
  _categories = categories;
  _file: File | any;
  title: string | undefined;
  category: string | undefined;
  description: string | undefined;
  price: string | undefined;
  constructor(
    @Inject(DOCUMENT) document: Document,
    private _postService: PostService,
    private _flashMesgSrvc: FlashMessagesService,
    private _router: Router
  ) {}

  uploadFile() {
    const file = document.getElementById('upload');
    file?.click();
    if (!!file) file.style.display = 'block';
  }

  onChange(event: any) {
    this._file = event.target.files[0];
  }

  async submitPost() {
    const post = {
      title: this.title,
      category: this.category,
      description: this.description,
      price: this.price,
      posts: this._file,
    };

    const validator = Object.entries(post).filter(
      (entry) => entry[1] == undefined
    );

    if (validator.length) {
      this._flashMesgSrvc.show('Please fill all the required fields', {
        cssClass: 'alert-error',
      });
      return;
    }

    try {
      const resp = await this._postService.storePost(post);
      if (resp.success) {
        this._flashMesgSrvc.show('You have successfully created an offer', {
          cssClass: 'alert-success',
        });
        this._router.navigateByUrl('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
