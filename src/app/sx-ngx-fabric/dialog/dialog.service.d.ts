import { Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { SxNgxFabricDialogRef } from './dialog-ref';
import { ComponentType } from '@angular/cdk/portal';
import { SxNgxFabricDialogConfig } from './dialog-config';
export declare class SxNgxFabricDialogService {
    private injector;
    private overlay;
    constructor(injector: Injector, overlay: Overlay);
    open<T>(component: ComponentType<T>, config?: SxNgxFabricDialogConfig): SxNgxFabricDialogRef<T>;
    private createOverlay(config);
    private getOverlayConfig(config);
    private attachDialogContainer<T>(component, overlayRef, config, dialogRef);
    private _attachDialogContainer(overlay, config);
    private _attachDialogContent<T>(componentOrTemplateRef, dialogContainer, overlayRef, config);
    private createInjector<T>(config, dialogRef);
}
