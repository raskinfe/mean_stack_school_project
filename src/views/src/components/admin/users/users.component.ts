import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/services/admin/AdminServices';
import { store } from 'src/store/store';
import { FlashMessagesService } from 'flash-messages-angular';

interface IUser {
  avatar: string;
  email: string;
  name: string;
  password: string;
  role: number;
  _id: string;
}

const Roles = ['user', 'admin'];

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  editing: string = '';
  roles = Roles;
  role: string = 'user';

  constructor(
    private adminApi: AdminService,
    private flashMsg: FlashMessagesService
  ) {}

  async ngOnInit() {
    this.adminApi.getUsers(store.state.authToken).subscribe((data: any) => {
      if (data.success) {
        this.users = data.users;
      }
    });
  }

  updateRole(id: string) {
    this.adminApi
      .updateRole(id, this.role, store.state.authToken)
      .subscribe((data: any) => {
        if (data.success) {
          this.flashMsg.show('User role updated successfully', {
            cssClass: 'alert-success',
          });
        }
        this.ngOnInit();
        this.editing = '';
      });
  }

  destroyUser(id: string) {
    this.adminApi
      .destroyUser(id, store.state.authToken)
      .subscribe((data: any) => {
        this.flashMsg.show('User deleted', { cssClass: 'alert-success' });
        this.ngOnInit();
      });
  }
}
