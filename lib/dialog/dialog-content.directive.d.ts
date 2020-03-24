import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { OnChanges, SimpleChanges } from '@angular/core';
import { SxNgxFabricDialogRef } from './dialog-ref';
import * as i0 from "@angular/core";
/**
 * Button that will close the current dialog.
 */
export declare class SxNgxFabricDialogClose implements OnChanges {
    dialogRef: SxNgxFabricDialogRef<any>;
    /** Screenreader label for the button. */
    ariaLabel: string;
    /** Dialog close input. */
    dialogResult: any;
    dialogClose: any;
    constructor(dialogRef: SxNgxFabricDialogRef<any>);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<SxNgxFabricDialogClose>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SxNgxFabricDialogClose, "button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]", ["sxNgxFabricDialogClose"], { "ariaLabel": "aria-label"; "dialogResult": "sx-ngx-fabric-dialog-close"; "dialogClose": "sxNgxFabricDialogClose"; }, {}, never>;
}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
export declare class SxNgxFabricDialogTitle {
    private _container;
    id: string;
    constructor(_container: SxNgxDialogContainerComponent);
    static ɵfac: i0.ɵɵFactoryDef<SxNgxFabricDialogTitle>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SxNgxFabricDialogTitle, "[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]", ["sxNgxFabricDialogTitle"], { "id": "id"; }, {}, never>;
}
/**
 * Scrollable content container of a dialog.
 */
export declare class SxNgxFabricDialogContent {
    static ɵfac: i0.ɵɵFactoryDef<SxNgxFabricDialogContent>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SxNgxFabricDialogContent, "[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]", never, {}, {}, never>;
}
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
export declare class SxNgxFabricDialogActions {
    static ɵfac: i0.ɵɵFactoryDef<SxNgxFabricDialogActions>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SxNgxFabricDialogActions, "[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]", never, {}, {}, never>;
}
