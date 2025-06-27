import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-documentation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class Documentation {}
