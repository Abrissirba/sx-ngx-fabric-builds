import { TemplateRef, EventEmitter, ElementRef } from '@angular/core';
export declare class CalloutComponent {
    private elementRef;
    xPosition: string;
    yPosition: string;
    templateRef: TemplateRef<any>;
    beak: ElementRef;
    closed: EventEmitter<void | "click" | "keydown">;
    private _beakPosition;
    beakPosition: any;
    constructor(elementRef: ElementRef);
    updateBeakPosition(): void;
}
