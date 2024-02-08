import { NgModule } from '@angular/core';
import { CreateNewItemComponent } from './create-new-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'src/utils/button/button.module';

@NgModule({
  declarations: [CreateNewItemComponent],
  imports: [CommonModule, FormsModule, BrowserAnimationsModule, ButtonModule],
  providers: [],
})
export class CreateNewItemModule {}
