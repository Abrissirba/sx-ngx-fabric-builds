import { EventEmitter } from "@angular/core";
import { IBreadcrumbItem } from "./i-breadcrumb-item";
import * as i0 from "@angular/core";
export declare class BreadcrumbComponent {
    items: Array<IBreadcrumbItem>;
    itemClick: EventEmitter<IBreadcrumbItem>;
    constructor();
    onClick(item: IBreadcrumbItem): void;
    static ɵfac: i0.ɵɵFactoryDef<BreadcrumbComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BreadcrumbComponent, "sx-ngx-fabric-breadcrumb", never, { "items": "items"; }, { "itemClick": "itemClick"; }, never>;
}
