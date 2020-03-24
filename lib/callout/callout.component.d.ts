import { TemplateRef, EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CalloutComponent {
    private elementRef;
    xPosition: string;
    yPosition: string;
    templateRef: TemplateRef<any>;
    beak: ElementRef;
    closed: EventEmitter<void | "click" | "keydown">;
    private _beakPosition;
    get beakPosition(): any;
    set beakPosition(val: any);
    constructor(elementRef: ElementRef);
    updateBeakPosition(): void;
    static ɵfac: i0.ɵɵFactoryDef<CalloutComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CalloutComponent, "sx-ngx-fabric-callout", never, { "xPosition": "xPosition"; "yPosition": "yPosition"; }, { "closed": "closed"; }, never>;
}
