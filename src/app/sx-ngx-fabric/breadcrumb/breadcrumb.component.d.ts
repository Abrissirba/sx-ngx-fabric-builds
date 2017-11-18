import { EventEmitter } from '@angular/core';
import { IBreadcrumbItem } from './i-breadcrumb-item';
export declare class BreadcrumbComponent {
    items: Array<IBreadcrumbItem>;
    itemClick: EventEmitter<IBreadcrumbItem>;
    constructor();
    onClick(item: IBreadcrumbItem): void;
}
