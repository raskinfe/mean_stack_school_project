import { DOCUMENT } from '@angular/common';
import { Component, Inject, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(@Inject(DOCUMENT) document: Document) {}

  @Output() offerLookUp: EventEmitter<string> = new EventEmitter();

  onKeyPressed(value: string) {
    const icon: any = document.querySelector('.icon');
    icon.style.display = 'none';
    if (!value) {
      icon.style.display = 'block';
    }
    this.offerLookUp.emit(value.toString());
  }

  backSpaceEvent(value: string) {
    this.offerLookUp.emit(value.toString());
  }
}
