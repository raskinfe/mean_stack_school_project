import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferComponent } from './offer.component';
import { FlashMessagesService } from 'flash-messages-angular';

@NgModule({
  declarations: [OfferComponent],
  imports: [CommonModule, FormsModule, BrowserAnimationsModule],
  providers: [FlashMessagesService],
})
export class OfferModule {}
