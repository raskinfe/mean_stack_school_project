import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from 'src/services/api/api.service';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/utils/button/button.module';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    ButtonModule,
    TranslateModule,
  ],
  providers: [ApiService, TranslateService],
})
export class LoginModule {}
