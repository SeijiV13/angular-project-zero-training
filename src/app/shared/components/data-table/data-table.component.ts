import { Component, Input } from '@angular/core';
import { DataTableConfig } from '../../models/DataTableConfig';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() dataTableConfig: DataTableConfig;

  constructor() { }

}
