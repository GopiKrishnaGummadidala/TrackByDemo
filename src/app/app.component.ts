import { Component, OnInit } from '@angular/core';

export interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Item[] = [];

  ngOnInit(): void {
    this.items.push({id: 1, name: 'Lappy'});
    this.items.push({id: 2, name: 'Phone'});
    this.items.push({id: 3, name: 'Ear phones'});
  }

  refreshItems(): void {
    this.items = [{id: 1, name: 'Lappy'},{id: 2, name: 'Phone'},{id: 3, name: 'Ear phones'}, {id: 4, name: 'Headsets'}];
  }

  trackByMethod(item: Item): number {
    return item.id;
  }
}
