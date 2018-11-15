import {Component, Input, OnInit} from '@angular/core';
import {GroupClass} from '../../models/GroupClass';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() group = new GroupClass();
  constructor() { }

  ngOnInit() {
  }
}
