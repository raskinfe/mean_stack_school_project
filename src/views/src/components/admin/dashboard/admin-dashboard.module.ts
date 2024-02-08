import { NgModule } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminService } from 'src/services/admin/AdminServices';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from '../users/users.component';
import { CategoryChartComponent } from '../category-chart/category-chart.component';
import { OffersComponent } from '../offers/offers.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UsersComponent,
    CategoryChartComponent,
    OffersComponent,
  ],
  imports: [CommonModule, FormsModule, BrowserAnimationsModule],
  providers: [AdminService],
})
export class AdminDashboardModule {}
