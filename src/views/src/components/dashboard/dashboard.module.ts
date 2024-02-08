import { NgModule } from '@angular/core';
import { PostService } from 'src/services/post/post.service';
import { DashboardComponent } from './dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/sidebar.component';
import { SearchComponent } from './search/serach.component';
import { ChatBoxComponent } from '../chat-box/chat-box.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'src/utils/button/button.module';
@NgModule({
  declarations: [
    DashboardComponent,
    CarouselComponent,
    DashboardSidebarComponent,
    SearchComponent,
    ChatBoxComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    ButtonModule,
  ],
  providers: [PostService, TranslateService],
})
export class DashboardModule {}
