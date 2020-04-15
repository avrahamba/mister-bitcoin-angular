import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { filterBy } from 'src/app/models/filterBy';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  @Input() filterBy: filterBy
  filterByCopy: filterBy
  @Output()onFilter = new EventEmitter<filterBy>();

  constructor() {   }
  ngOnInit(): void {
    this.filterByCopy = {...this.filterBy}
  }
  onInput(){
    this.onFilter.emit(this.filterByCopy)
  }
}
