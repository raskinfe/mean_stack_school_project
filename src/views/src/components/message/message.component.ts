import {
  AfterViewChecked,
  Component,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { store } from 'src/store/store';
import { MessageService } from 'src/services/messages/MessageService';
import { DOCUMENT } from '@angular/common';
import { SocketService } from 'src/services/messages/SocketService';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit, AfterViewChecked {
  _state: any;
  messages: any;
  senders: any[] = [];
  grouppedMessages: any;
  outgoing: any;
  messageLength: any;
  isMobile: boolean = false;

  constructor(
    private socket: SocketService,
    private messageService: MessageService,
    @Inject(DOCUMENT) document: Document
  ) {
    this._state = store.state;
  }
  ngAfterViewChecked(): void {
    const element: HTMLElement | any = document.getElementById('msg');
    element.scrollTop = 3000;
  }

  async ngOnInit() {
    this.isMobile = window.innerWidth < 780;
    const token = this._state.authToken;
    const reciever = this._state.user.id;
    this.messageService.getMessages(reciever, token).subscribe((data: any) => {
      if (data.success) {
        this.messages = data.messages;
        this.senders = [];
        Object.entries(this.messages).forEach((message: any) => {
          message.forEach((msg: any) => {
            if (typeof msg == 'object') {
              let imgUrl;
              if (
                msg.avatar?.length &&
                msg.avatar[msg.avatar.length - 1] != null
              ) {
                imgUrl = `http://localhost:3000/user/get-profile/${
                  msg.sender[msg.avatar.length - 1]
                }`;
              } else {
                imgUrl = '../../assets/images/dummy.jpg';
              }
              this.senders.push({
                id: msg.sender[msg.sender.length - 1],
                name: msg.sender_name[msg.sender_name.length - 1],
                avatar: imgUrl,
                time: msg.time[msg.time.length - 1],
              });
            }
          });
        });
        this.senders.sort((a, b) => {
          return Date.parse(b.time) - Date.parse(a.time);
        });
        this.messageLength = this.messages.length;
        this.activateBody(this.senders[0].id);
      }
    });

    this.socket.onFetchMessages().subscribe((msg: any) => {
      this.senders = [];
      this.ngOnInit();
    });
  }

  async activateBody(id: string | number) {
    const receiver = this._state.user.id;
    this.messageService
      .getMessages(receiver, this._state.authToken, id)
      .subscribe((data: any) => {
        this.grouppedMessages = data.messages;
        document.querySelectorAll('.--active').forEach((ele) => {
          ele.classList.remove('--active');
        });

        document.querySelectorAll('.active-tab').forEach((element) => {
          element.classList.remove('active-tab');
        });

        document.querySelectorAll('.msg')?.forEach((doc: HTMLElement | any) => {
          doc.classList.add('--active');
        });

        const msg: HTMLElement | any = document.getElementById('msg');
        msg.scrollTop = window.innerHeight;

        const element = document.getElementById(id.toString());
        element?.classList.add('active-tab');
      });
  }

  onSendMessage() {
    const sender = this._state.user.id;
    const reciever: any = document.querySelector('.active-tab')?.id;
    if (!this.outgoing) {
      return;
    }

    this.socket.sendMessages({ reciever, sender, message: this.outgoing });
    this.ngOnInit();
    this.outgoing = '';
    this.activateBody(reciever);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.ngOnInit();
  }

  imageUrl(avatar: string | null) {
    if (avatar) {
      return avatar;
    }
    return '../../assets/images/dummy.jpg';
  }
}
