import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { categories } from 'src/store/categoryRepository';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class DashboardSidebarComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLangs: any = translate.getBrowserLang();
    translate.use(browserLangs?.match(/en|de/) ? browserLangs : 'en');
  }
  categories = categories;

  @Output() categoryChange: EventEmitter<string> = new EventEmitter();
  @Output() categorySelect: EventEmitter<string> = new EventEmitter();
  @Output() priceFilter: EventEmitter<string | number> = new EventEmitter();

  onSelectEvent(value: string | number) {
    this.categorySelect.emit(value.toString());
  }

  onChangeCategory(value: string) {
    this.categoryChange.emit(value);
  }

  filterByPrice(value: number | string) {
    this.priceFilter.emit(value);
  }
}
