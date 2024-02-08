import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password.component';
import { FlashMessagesService } from 'flash-messages-angular';
import { ButtonModule } from 'src/utils/button/button.module';

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [FormsModule, ButtonModule],
  providers: [FlashMessagesService],
})
export class ResetPasswordModule {}
