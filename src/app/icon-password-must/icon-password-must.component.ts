import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-icon-password-must',
  templateUrl: './icon-password-must.component.html',
  styleUrls: ['./icon-password-must.component.css'],
  moduleId: module.id,
})
export class IconPasswordMustComponent implements OnInit {
    @Input() status: boolean = false;
    constructor() { }

    ngOnInit() {
    }

}
