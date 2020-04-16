import { Component, OnInit, Input } from '@angular/core';
import { move } from 'src/app/models/move';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }
  @Input() moves: move[];
  @Input() name: string
  ngOnInit(): void { }

}
