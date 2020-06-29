import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
    @Input() rows: any;
    @Input() selected: any;
    @Input() user: any;
    @Input() template: TemplateRef<any>;

    // @ViewChild('userName') userName: ElementRef;
    
    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(): void {
        console.log("CreatePageComponent -> ngOnChanges -> this.template", this.template)
    }

    test = () => {
        if(this.template !== undefined)
            return this.template;

        return false;
    }
}
