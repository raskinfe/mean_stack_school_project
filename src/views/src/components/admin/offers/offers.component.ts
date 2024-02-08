import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/AdminServices';

@Component({
  selector: 'app-admin-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OffersComponent implements OnInit {
  offers: any[] = [];
  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.adminService.getOffers().subscribe((data: any) => {
      if (data.success) {
        this.offers = data.posts;
      }
      console.log(this.offers);
    });
  }
}
