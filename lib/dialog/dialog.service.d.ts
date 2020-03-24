import { Overlay } from '@angular/cdk/overlay';
import { ComponentType } from '@angular/cdk/portal';
import { Injector } from '@angular/core';
import { SxNgxFabricDialogConfig } from './dialog-config';
import { SxNgxFabricDialogRef } from './dialog-ref';
import * as i0 from "@angular/core";
export declare class SxNgxFabricDialogService {
    private injector;
    private overlay;
    constructor(injector: Injector, overlay: Overlay);
    open<T>(component: ComponentType<T>, config?: SxNgxFabricDialogConfig): SxNgxFabricDialogRef<T>;
    private createOverlay;
    private getOverlayConfig;
    private attachDialogContainer;
    private _attachDialogContainer;
    private _attachDialogContent;
    private createInjector;
    static ɵfac: i0.ɵɵFactoryDef<SxNgxFabricDialogService>;
    static ɵprov: i0.ɵɵInjectableDef<SxNgxFabricDialogService>;
}
