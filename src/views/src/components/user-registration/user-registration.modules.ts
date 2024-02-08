import { NgModule } from '@angular/core';
import { UserRegistrationComponent } from './user-registration.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from 'src/services/api/api.service';
import { ButtonModule } from 'src/utils/button/button.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [UserRegistrationComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    ButtonModule,
    TranslateModule,
  ],
  providers: [ApiService, TranslateService],
})
export class UserRegistrationModule {}
