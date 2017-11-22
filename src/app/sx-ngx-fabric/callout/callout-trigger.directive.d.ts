import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, ViewContainerRef } from '@angular/core';
import { CalloutComponent } from './callout.component';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
export declare class CalloutTriggerDirective implements OnDestroy {
    private _overlay;
    private _element;
    private _viewContainerRef;
    sxNgxFabricCalloutTrigger: CalloutComponent;
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
    private _createOverlay();
    private _getOverlayConfig();
    private _getPosition();
    private _subscribeToPositions(position);
}
