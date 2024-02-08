import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewItemComponent } from 'src/components/create-new-item/create-new-item.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { ResetPasswordComponent } from 'src/components/reset-password/reset-password.component';
import { MessageComponent } from 'src/components/message/message.component';
import { OfferComponent } from 'src/components/single-offer/offer.component';
import { UserProfileComponent } from 'src/components/user-profile/user-profile.component';
import { UserRegistrationComponent } from 'src/components/user-registration/user-registration.component';
import { AuthGuardService } from 'src/services/auth-guard/auth-guard.service';
import { AdminDashboardComponent } from 'src/components/admin/dashboard/admin-dashboard.component';
import { IssueComponent } from 'src/components/issue/issue.component';
import { AdminGuard } from 'src/services/admin-guard/AdminGuard.guard';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-new-item',
    component: CreateNewItemComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'messages',
    component: MessageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'offers/:id',
    component: OfferComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    component: AdminDashboardComponent,
  },
  { path: 'contact', component: IssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
