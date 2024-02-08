import { Component } from '@angular/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { ApiService } from 'src/services/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  email: string | undefined;

  constructor(
    private flashMessageService: FlashMessagesService,
    private apiService: ApiService,
    private router: Router
  ) {}

  async onSubmit() {
    const regex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!this.email) {
      this.flashMessageService.show('Please fill the required field', {
        cssClass: 'alert-error',
        timeout: 3000,
      });
      return;
    }

    if (!regex.test(this.email)) {
      this.flashMessageService.show('Please enter a valid email address', {
        cssClass: 'alert-error',
        timeout: 3000,
      });
      return;
    }

    try {
      const resp = await this.apiService.resetPassword(this.email);
      if (resp.success) {
        this.flashMessageService.show(
          'Email with an instruction to reset password has been sent to ' +
            this.email,
          { cssClass: 'alert-success', timeout: 3000 }
        );
        this.email = '';
        this.router.navigate(['/login']);
      } else {
        this.flashMessageService.show(resp.message, {
          cssClass: 'alert-error',
          timeout: 3000,
        });
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
