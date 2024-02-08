import { Component } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  repeat_password: string | undefined;
  passwordNotMatch = false;
  displayErrorMessage = false;
  errorMessage: string | undefined;

  constructor(
    private api: ApiService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLangs: any = translate.getBrowserLang();
    translate.use(browserLangs?.match(/en|de/) ? browserLangs : 'en');
  }

  checkIfMatch() {
    return this.password === this.repeat_password;
  }

  toggleAlert() {
    this.passwordNotMatch = false;
  }

  async registerUser() {
    if (!this.checkIfMatch()) {
      this.passwordNotMatch = true;
      this.repeat_password = '';
      return;
    }
    if (!this.name || !this.password || !this.email) {
      this._flashMessagesService.show('Please fill al the required field', {
        cssClass: 'alert-error',
        timeout: 3000,
      });
      return;
    }
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    try {
      const resp = await this.api.registerUser(user);
      if (!resp.success) {
        this.displayErrorMessage = true;
        this.errorMessage = 'Something went wrong try again';
        return;
      }
      this._flashMessagesService.show(
        'You are now successfully registered and can login',
        { cssClass: 'alert-success', timeout: 3000 }
      );
      this.router.navigate(['/login']);
    } catch (error) {
      this.displayErrorMessage = true;
      this.errorMessage = 'Something went wrong try again';
      return;
    }
  }
}
