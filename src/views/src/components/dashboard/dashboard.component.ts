import { Component, HostListener, OnInit } from '@angular/core';
import { store } from 'src/store/store';
import { PostService } from 'src/services/post/post.service';
import { categories } from 'src/store/categoryRepository';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Post } from 'src/types/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  _state: Object | any;
  posts: Post[] = [];
  numberOfPages: number = 0;
  postPerPage = 9;
  start = 0;
  paginatedPosts: Post[] = [];
  categories = categories;
  pageNumber = 1;
  end: number = this.postPerPage;
  isMobile = false;
  featured: any[] = [];
  resizeObservable$: Observable<Event> = fromEvent(window, 'resize');

  constructor(
    private _postService: PostService,
    private _router: Router,
    public translate: TranslateService
  ) {
    this._state = store.state;
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLangs: any = translate.getBrowserLang();
    translate.use(browserLangs?.match(/en|de/) ? browserLangs : 'en');
  }
  async ngOnInit() {
    const largeScreen: number = 1900;

    if (window.innerWidth > largeScreen) {
      this.postPerPage = 20;
      this.end = this.postPerPage;
    }

    const resizeSubscription$ = this.resizeObservable$.subscribe((evt) => {
      if (window.innerWidth > largeScreen) {
        this.postPerPage = 20;
        this.end = this.postPerPage;
      }
    });

    try {
      if (!this.posts.length) {
        const response = await this._postService.getPosts();
        this.posts = response.posts;
      }

      this.paginatedPosts = this.paginatePosts().map((post: any) => post[1]);
      this.numberOfPages = Math.ceil(this.posts.length / this.postPerPage);

      for (let post of this.posts) {
        if (this.featured.indexOf(post.category) === -1) {
          this.featured.push(post.category, post);
        }
      }

      this.featured.forEach((feature, index) => {
        if (typeof feature != 'object') {
          this.featured.splice(index, 1);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.postPerPage = 9;
    this.featured = [];
    this.ngOnInit();
  }

  paginatePosts() {
    return Object.entries(this.posts).slice(this.start, this.end);
  }

  imageUrl(name: string) {
    return this._state.apiHost + `/post/get-post-image/${name}`;
  }

  formattedDate(date: Date) {
    return new Date(date).toLocaleString('en-us');
  }

  forward() {
    this.pageNumber++;
    this.start += this.postPerPage;
    this.end += this.postPerPage;
    this.ngOnInit();
  }

  back() {
    this.pageNumber--;
    this.start -= this.postPerPage;
    this.end -= this.postPerPage;
    this.ngOnInit();
  }

  onSelect(event: any) {
    document.getElementById(event)?.click();
  }

  onChangeCategory(event: any) {
    const elem: HTMLInputElement | any = document.getElementById(event);
    if (elem?.checked == true) {
      this.paginatedPosts = this.posts.filter(
        (post: any) => post.category === event
      );
    } else {
      this.featured = [];
      this.ngOnInit();
    }
  }

  filterByPrice(event: any) {
    const elem: HTMLInputElement | any = document.getElementById(event);
    if (elem?.checked == true) {
      this.paginatedPosts = this.posts.filter(
        (post: any) => post.price <= event
      );
    } else {
      this.featured = [];
      this.ngOnInit();
    }
  }

  goToOffer(offer: any) {
    this._router.navigateByUrl(`offers/${offer._id}`, { state: offer });
  }

  onKeyWordSearch(event: any) {
    const posts = this.posts.filter((post: any) =>
      post.title.toLowerCase().includes(event)
    );
    if (event) {
      this.paginatedPosts = posts;
    } else {
      this.featured = [];
      this.ngOnInit();
    }
  }

  filterByCarousel(event: string) {
    this.paginatedPosts = this.posts.filter(
      (post: any) => post.category === event
    );
  }
}
