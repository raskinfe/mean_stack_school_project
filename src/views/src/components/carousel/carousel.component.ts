import { Component, Inject, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { store } from 'src/store/store';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() featured: any[] = [];
  constructor(@Inject(DOCUMENT) document: Document) {}

  @Output() emitCategory: EventEmitter<string> = new EventEmitter<string>();

  imageUrl(image: string) {
    return store.state.apiHost + `/post/get-post-image/${image}`;
  }
  changeCategory(category: string) {
    this.emitCategory.emit(category);
  }
}
