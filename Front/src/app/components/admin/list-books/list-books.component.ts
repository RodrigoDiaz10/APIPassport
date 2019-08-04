import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { GroupInterface } from '../../../models/book-interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  constructor(private dataApiService: DataApiService) { }
  private groups: GroupInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListGroups();
  }

  getListGroups(): void {
    this.dataApiService
      .getAllGroups()
      .subscribe((groups: GroupInterface) => (this.groups = groups));
  }

  onDeleteGroup(groups: GroupInterface): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteGroup(groups.id).subscribe();
    }
  }

  onPreUpdateGroup(group: GroupInterface): void {
    this.dataApiService.selectedGroup = Object.assign({}, group);
  }

  resetForm(groupForm?: NgForm): void {
    this.dataApiService.selectedGroup = {
      id: null,
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
  }

}



