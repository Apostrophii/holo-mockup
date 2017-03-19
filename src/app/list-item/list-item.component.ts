import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() icon: string;
  @Input() name: string;
  @Input() locked = false;
  @Input() favorited = false;
  @Input() selected = false;

  constructor() { }

  ngOnInit() {
  }

}
