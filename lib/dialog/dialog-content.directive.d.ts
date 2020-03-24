import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { OnChanges, SimpleChanges } from '@angular/core';
import { SxNgxFabricDialogRef } from './dialog-ref';
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
}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
export declare class SxNgxFabricDialogTitle {
    private _container;
    id: string;
    constructor(_container: SxNgxDialogContainerComponent);
}
/**
 * Scrollable content container of a dialog.
 */
export declare class SxNgxFabricDialogContent {
}
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
export declare class SxNgxFabricDialogActions {
}
