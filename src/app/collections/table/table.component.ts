import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data:any;
  @Input() headers:any; 
  @Input('class') classNames?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
