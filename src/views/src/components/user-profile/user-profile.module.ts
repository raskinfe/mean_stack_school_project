import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { ApiService } from 'src/services/api/api.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/utils/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    RouterModule,
  ],
  providers: [ApiService],
})
export class UserProfileModule {}
