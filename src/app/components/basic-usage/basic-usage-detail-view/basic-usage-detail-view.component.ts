import { Component, Input, OnInit } from '@angular/core';

import { DataTableRow } from 'ornamentum';

@Component({
  selector: 'app-basic-usage-detail-view',
  templateUrl: './basic-usage-detail-view.component.html'
})
export class BasicUsageDetailViewComponent implements OnInit {
  @Input()
  public row: DataTableRow<any>;

  public stores: any[];

  public ngOnInit(): void {
    this.stores = this.row.item.availableStores;
    this.row.dataLoaded = true;
  }
}
