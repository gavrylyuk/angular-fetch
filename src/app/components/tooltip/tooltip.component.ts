import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/services/api.interface';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  items: Item[]

  constructor(
    private apiServise: ApiService
  ) { }

  ngOnInit() {
    this.apiServise.getItems().subscribe(
      (data) => this.items = data
    );
  }
}
