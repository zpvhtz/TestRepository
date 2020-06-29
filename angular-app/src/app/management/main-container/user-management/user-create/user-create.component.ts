import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-create',
	templateUrl: './user-create.component.html',
	styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit, AfterViewInit {
    @ViewChild("btnGroup", {static:true}) btnGroupTemplate: TemplateRef<any>;
    
	rows: any[] = [
        { name: "Name", type: "input" },
        { name: "Avatar", type: "img" },
    ];

    template: TemplateRef<any> = this.btnGroupTemplate;

	constructor(private router: Router, private cd:ChangeDetectorRef) { }

	ngOnInit(): void {
        
    }
    
    // evtCreat eUser = (event) => {
    //     console.log(event)
    //     console.log('vô')
    // }
    
    // evtCancel = (event) => {
    //     this.router.navigate(['/management/usermanagement/list']);
    // }

    ngAfterViewInit(): void {
        //this.updateTemplate();
        //this.cd.detectChanges();
    }

    updateTemplate = () => {
        this.template = this.btnGroupTemplate;
    }

    evtCreateUser = () => {

    }

    evtCancel = () => {

    }
}
