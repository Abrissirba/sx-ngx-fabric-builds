import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectorRef, ComponentRef, ElementRef, EmbeddedViewRef } from '@angular/core';
import { SxNgxFabricDialogConfig } from './dialog-config';
export declare class SxNgxDialogContainerComponent extends BasePortalOutlet {
    private _elementRef;
    private _changeDetectorRef;
    private _document;
    /** The portal outlet inside of this container into which the dialog content will be loaded. */
    _portalOutlet: CdkPortalOutlet;
    _config: SxNgxFabricDialogConfig;
    constructor(_elementRef: ElementRef, _changeDetectorRef: ChangeDetectorRef, _document: any);
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
}
