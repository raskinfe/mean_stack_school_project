import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';
import { MessageService } from 'src/services/messages/MessageService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocketService } from 'src/services/messages/SocketService';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule, FormsModule],
  providers: [MessageService, SocketService],
})
export class MessageModule {}
