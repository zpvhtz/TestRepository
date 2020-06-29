import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { products } from './products';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-kendo-grid',
    templateUrl: './kendo-grid.component.html',
    styleUrls: ['./kendo-grid.component.css']
})
export class KendoGridComponent implements OnInit {
    @Input() columns: any;
    @Input() data: any;
    @Input() total: any;
    @Input() buttons: any;
    @Input() pageSize: any;
    @Input() pageNumber: any;

    @Output() skip = new EventEmitter<any>();

    public gridData: GridDataResult;
    
    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        if(this.data !== undefined && this.total !== undefined)
            this.gridData = { data: this.data, total: this.total };
    }

    pageChange = (evt) => {
        this.skip.emit(evt.skip);
    }
}
