import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBy } from 'src/app/models/filterBy';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  filterByCopy: FilterBy
  
  @Input() filterBy: FilterBy
  
  @Output() onFilter = new EventEmitter<FilterBy>();

  constructor() { }
  
  ngOnInit(): void {
    this.filterByCopy = { ...this.filterBy }
  }
  
  onInput() {
    this.onFilter.emit(this.filterByCopy)
  }
}
