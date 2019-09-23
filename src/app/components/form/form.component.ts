import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  renderTooltip: boolean = false

  constructor( ) { }

  ngOnInit() { }

  handleOpenTooltip(): void {
    this.renderTooltip = !this.renderTooltip
  }
}
