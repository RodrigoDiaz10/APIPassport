import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { GroupInterface } from '../../models/book-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApiService: DataApiService,
    private location: Location
  ) { }
  ngOnInit() {
  }

  onSaveBook(groupForm: NgForm): void {
    if (groupForm.value.id == null) {
      // NEW
      this.dataApiService.saveGroup(groupForm.value).subscribe(group => location.reload());
    } else {
      // update
      this.dataApiService.updateGroup(groupForm.value).subscribe(group => location.reload());
    }
  }

}
