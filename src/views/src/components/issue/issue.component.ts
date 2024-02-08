import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FlashMessagesService } from 'flash-messages-angular';
import { AdminService } from 'src/services/admin/AdminServices';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss'],
})
export class IssueComponent {
  issuer_name: string | undefined;
  issuer_email: string | undefined;
  subject: string | undefined;
  body: string | undefined;

  constructor(
    private router: Router,
    private flashMsg: FlashMessagesService,
    private adminService: AdminService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLangs: any = translate.getBrowserLang();
    translate.use(browserLangs?.match(/en|de/) ? browserLangs : 'en');
  }

  async storeIssue() {
    if (
      !this.issuer_email ||
      !this.issuer_name ||
      !this.subject ||
      !this.body
    ) {
      this.flashMsg.show('Please fill all the required fields', {
        cssClass: 'alert-error',
        timeout: 3000,
      });
      return;
    }
    const issue = {
      issuer_email: this.issuer_email,
      issuer_name: this.issuer_name,
      subject: this.subject,
      body: this.body,
    };

    try {
      this.adminService.storeIssues(issue).subscribe((data) => {
        this.flashMsg.show('Successfully sent', {
          cssClass: 'alert-success',
          timeout: 3000,
        });
        this.router.navigateByUrl('/');
      });
    } catch (error: any) {
      this.flashMsg.show('Soething went wrong. please try again', {
        cssClass: 'alert-error',
        timeout: 3000,
      });
    }
  }
}
