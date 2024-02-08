import { NgModule } from '@angular/core';
import { IssueComponent } from './issue.component';
import { ButtonModule } from 'src/utils/button/button.module';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [IssueComponent],
  imports: [ButtonModule, FormsModule, TranslateModule],
  providers: [TranslateService],
})
export class IssueModule {}
