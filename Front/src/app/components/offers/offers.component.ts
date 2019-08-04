import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { GroupInterface } from 'src/app/models/book-interface';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  constructor(private dataApi: DataApiService) { }
  private groups: GroupInterface;

  ngOnInit() {
    this.dataApi
      .getOffers()
      .subscribe((data: GroupInterface) => (this.groups = data));
  }
}
