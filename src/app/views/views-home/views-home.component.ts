import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {
  statisticData = [
    { value: 22, label: 'Faves' },
    { value: 31200, label: 'Views' },
    { value: 22, label: 'Members' },
  ]
  items = [
    { 
      image: 'https://semantic-ui.com/images/avatar2/large/kristy.png',
      title: 'Kristy',
      description: 'Hi my name is Kristy',
    },
    { 
      image: 'https://semantic-ui.com/images/avatar2/large/molly.png',
      title: 'Molly',
      description: 'Hi my name is Molly',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
