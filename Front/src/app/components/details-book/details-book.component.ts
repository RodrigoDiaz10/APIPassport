import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GroupInterface } from 'src/app/models/book-interface';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {
  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  private group: GroupInterface = {

      members: '',
      group_leader: '',
      link: '',
      topic: '',
      description_proyect: '',
      scope: '',
      tools: '',
      objetive: '',
      level: '',
      area: '',
      state: ''
  };
  ngOnInit() {
    const group_id = this.route.snapshot.params['id'];
    this.getDetails(group_id);
  }

  getDetails(id: string) {
    this.dataApi.getGroupById(id).subscribe(group => (this.group = group));
  }
}
