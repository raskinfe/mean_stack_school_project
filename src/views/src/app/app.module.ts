import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'flash-messages-angular';
import { UserProfileModule } from 'src/components/user-profile/user-profile.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CreateNewItemModule } from 'src/components/create-new-item/create-new-item.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserRegistrationModule } from 'src/components/user-registration/user-registration.modules';
import { ApiService } from 'src/services/api/api.service';
import { LoginModule } from 'src/components/login/login.module';
import { AuthGuardService } from 'src/services/auth-guard/auth-guard.service';
import { PostService } from 'src/services/post/post.service';
import { DashboardModule } from 'src/components/dashboard/dashboard.module';
import { OfferModule } from 'src/components/single-offer/offer.module';
import { store } from 'src/store/store';
import { MessageService } from 'src/services/messages/MessageService';
import { MessageModule } from 'src/components/message/message.module';
import { FooterComponent } from 'src/components/footer/footer.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ResetPasswordModule } from 'src/components/reset-password/reset-password.module';
import { AdminDashboardModule } from 'src/components/admin/dashboard/admin-dashboard.module';
import { AdminGuard } from 'src/services/admin-guard/AdminGuard.guard';
import { IssueModule } from 'src/components/issue/issue.module';

const config: SocketIoConfig = { url: store.state.apiHost };

export const HttpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http);
};

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    UserRegistrationModule,
    FormsModule,
    LoginModule,
    FlashMessagesModule.forRoot(),
    UserProfileModule,
    HttpClientModule,
    DashboardModule,
    CreateNewItemModule,
    OfferModule,
    SocketIoModule.forRoot(config),
    MessageModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ResetPasswordModule,
    AdminDashboardModule,
    IssueModule,
  ],
  providers: [
    ApiService,
    AuthGuardService,
    PostService,
    MessageService,
    AdminGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
