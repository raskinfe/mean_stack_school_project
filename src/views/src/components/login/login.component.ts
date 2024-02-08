import { Component } from '@angular/core';
import { ApiService } from 'src/services/api/api.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../user-registration/user-registration.component.scss',
    './login.component.scss',
  ],
})
export class LoginComponent {
  errorMessage: string | any;
  displayErrorMessage = false;
  email: string | any;
  password: string | any;

  constructor(
    private _apiService: ApiService,
    private _router: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLangs: any = translate.getBrowserLang();
    translate.use(browserLangs?.match(/en|de/) ? browserLangs : 'en');
  }

  async authenticateUser() {
    const user = {
      email: this.email,
      password: this.password,
    };

    try {
      const response = await this._apiService.authenticateUser(user);
      if (!response?.success) {
        this.displayErrorMessage = true;
        this.errorMessage = response.message;
        return;
      }
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      this._router.navigate(['/']).then(() => {
        window.location.reload();
      });
    } catch (error) {
      if (error instanceof Error) {
        this.displayErrorMessage = true;
        this.errorMessage = error.message;
        return;
      }
    }
  }
}
