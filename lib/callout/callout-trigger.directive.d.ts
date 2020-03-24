import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { CalloutComponent } from './callout.component';
import * as i0 from "@angular/core";
export declare class CalloutTriggerDirective implements OnDestroy {
    private _overlay;
    private _element;
    private _viewContainerRef;
    get sxNgxFabricCalloutTrigger(): CalloutComponent;
    set sxNgxFabricCalloutTrigger(val: CalloutComponent);
    private _portal;
    private _overlayRef;
    private _calloutOpen;
    private _closeSubscription;
    private _positionSubscription;
    callout: CalloutComponent;
    constructor(_overlay: Overlay, _element: ElementRef, _viewContainerRef: ViewContainerRef);
    ngOnDestroy(): void;
    openCallout(): void;
    closeMenu(): void;
    _handleClick(): void;
    private _createOverlay;
    private _getOverlayConfig;
    private _getPosition;
    private _subscribeToPositions;
    static ɵfac: i0.ɵɵFactoryDef<CalloutTriggerDirective>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<CalloutTriggerDirective, "[sxNgxFabricCalloutTrigger]", ["sxNgxFabricCalloutTrigger"], { "sxNgxFabricCalloutTrigger": "sxNgxFabricCalloutTrigger"; }, {}, never>;
}
