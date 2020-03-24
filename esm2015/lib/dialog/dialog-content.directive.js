/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { Directive, Input, Optional } from '@angular/core';
import { SxNgxFabricDialogRef } from './dialog-ref';
/** *
 * Counter used to generate unique IDs for dialog elements.
  @type {?} */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
export class SxNgxFabricDialogClose {
    /**
     * @param {?} dialogRef
     */
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        /**
         * Screenreader label for the button.
         */
        this.ariaLabel = 'Close dialog';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const proxiedChange = changes["_sxNgxFabricDialogClose"] || changes["_sxNgxFabricDialogCloseResult"];
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
}
SxNgxFabricDialogClose.decorators = [
    { type: Directive, args: [{
                selector: `button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]`,
                exportAs: 'sxNgxFabricDialogClose',
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel',
                    'type': 'button',
                }
            },] }
];
/** @nocollapse */
SxNgxFabricDialogClose.ctorParameters = () => [
    { type: SxNgxFabricDialogRef }
];
SxNgxFabricDialogClose.propDecorators = {
    ariaLabel: [{ type: Input, args: ['aria-label',] }],
    dialogResult: [{ type: Input, args: ['sx-ngx-fabric-dialog-close',] }],
    dialogClose: [{ type: Input, args: ['sxNgxFabricDialogClose',] }]
};
if (false) {
    /**
     * Screenreader label for the button.
     * @type {?}
     */
    SxNgxFabricDialogClose.prototype.ariaLabel;
    /**
     * Dialog close input.
     * @type {?}
     */
    SxNgxFabricDialogClose.prototype.dialogResult;
    /** @type {?} */
    SxNgxFabricDialogClose.prototype.dialogClose;
    /** @type {?} */
    SxNgxFabricDialogClose.prototype.dialogRef;
}
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
export class SxNgxFabricDialogTitle {
    /**
     * @param {?} _container
     */
    constructor(_container) {
        this._container = _container;
        this.id = `sx-ngx-fabric-dialog-title-${dialogElementUid++}`;
    }
}
SxNgxFabricDialogTitle.decorators = [
    { type: Directive, args: [{
                selector: '[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]',
                exportAs: 'sxNgxFabricDialogTitle',
                host: {
                    'class': 'ms-Dialog-title',
                    '[id]': 'id',
                },
            },] }
];
/** @nocollapse */
SxNgxFabricDialogTitle.ctorParameters = () => [
    { type: SxNgxDialogContainerComponent, decorators: [{ type: Optional }] }
];
SxNgxFabricDialogTitle.propDecorators = {
    id: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SxNgxFabricDialogTitle.prototype.id;
    /** @type {?} */
    SxNgxFabricDialogTitle.prototype._container;
}
/**
 * Scrollable content container of a dialog.
 */
export class SxNgxFabricDialogContent {
}
SxNgxFabricDialogContent.decorators = [
    { type: Directive, args: [{
                selector: `[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]`,
                host: { 'class': 'ms-Dialog-content' }
            },] }
];
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
export class SxNgxFabricDialogActions {
}
SxNgxFabricDialogActions.decorators = [
    { type: Directive, args: [{
                selector: `[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]`,
                host: { 'class': 'ms-Dialog-actions' }
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3gtbmd4LWZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU3RSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFHcEQsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Ozs7QUFjekIsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVNqQyxZQUFtQixTQUFvQztRQUFwQyxjQUFTLEdBQVQsU0FBUyxDQUEyQjs7OztRQVB2RCxpQkFBeUMsY0FBYyxDQUFDO0tBT0k7Ozs7O0lBRTVELFdBQVcsQ0FBQyxPQUFzQjs7UUFDaEMsTUFBTSxhQUFhLEdBQUcsT0FBTywrQkFBNEIsT0FBTyxpQ0FBOEIsQ0FBQztRQUUvRixJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7U0FDaEQ7S0FDRjs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0VBQW9FO2dCQUM5RSxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLCtCQUErQjtvQkFDMUMsbUJBQW1CLEVBQUUsV0FBVztvQkFDaEMsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7Ozs7WUFoQlEsb0JBQW9COzs7d0JBbUIxQixLQUFLLFNBQUMsWUFBWTsyQkFHbEIsS0FBSyxTQUFDLDRCQUE0QjswQkFFbEMsS0FBSyxTQUFDLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JqQyxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQWdDLFVBQXlDO1FBQXpDLGVBQVUsR0FBVixVQUFVLENBQStCO1FBRnpFLFVBQWMsOEJBQThCLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztLQUVhOzs7WUFYL0UsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3REFBd0Q7Z0JBQ2xFLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixNQUFNLEVBQUUsSUFBSTtpQkFDYjthQUNGOzs7O1lBbERRLDZCQUE2Qix1QkFzRHZCLFFBQVE7OztpQkFGcEIsS0FBSzs7Ozs7Ozs7Ozs7QUFjUixNQUFNLE9BQU8sd0JBQXdCOzs7WUFKcEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwRkFBMEY7Z0JBQ3BHLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBQzthQUNyQzs7Ozs7O0FBWUQsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBSnBDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEZBQTBGO2dCQUNwRyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTeE5neEZhYnJpY0RpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XHJcblxyXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIGRpYWxvZyBlbGVtZW50cy4gKi9cclxubGV0IGRpYWxvZ0VsZW1lbnRVaWQgPSAwO1xyXG5cclxuLyoqXHJcbiAqIEJ1dHRvbiB0aGF0IHdpbGwgY2xvc2UgdGhlIGN1cnJlbnQgZGlhbG9nLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBidXR0b25bc3gtbmd4LWZhYnJpYy1kaWFsb2ctY2xvc2VdLCBidXR0b25bc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZV1gLFxyXG4gIGV4cG9ydEFzOiAnc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZScsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnZGlhbG9nUmVmLmNsb3NlKGRpYWxvZ1Jlc3VsdCknLFxyXG4gICAgJ1thdHRyLmFyaWEtbGFiZWxdJzogJ2FyaWFMYWJlbCcsXHJcbiAgICAndHlwZSc6ICdidXR0b24nLCAvLyBQcmV2ZW50cyBhY2NpZGVudGFsIGZvcm0gc3VibWl0cy5cclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ0Nsb3NlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAvKiogU2NyZWVucmVhZGVyIGxhYmVsIGZvciB0aGUgYnV0dG9uLiAqL1xyXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nID0gJ0Nsb3NlIGRpYWxvZyc7XHJcblxyXG4gIC8qKiBEaWFsb2cgY2xvc2UgaW5wdXQuICovXHJcbiAgQElucHV0KCdzeC1uZ3gtZmFicmljLWRpYWxvZy1jbG9zZScpIGRpYWxvZ1Jlc3VsdDogYW55O1xyXG5cclxuICBASW5wdXQoJ3N4Tmd4RmFicmljRGlhbG9nQ2xvc2UnKSBkaWFsb2dDbG9zZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBTeE5neEZhYnJpY0RpYWxvZ1JlZjxhbnk+KSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJveGllZENoYW5nZSA9IGNoYW5nZXMuX3N4Tmd4RmFicmljRGlhbG9nQ2xvc2UgfHwgY2hhbmdlcy5fc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZVJlc3VsdDtcclxuXHJcbiAgICBpZiAocHJveGllZENoYW5nZSkge1xyXG4gICAgICB0aGlzLmRpYWxvZ1Jlc3VsdCA9IHByb3hpZWRDaGFuZ2UuY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRpdGxlIG9mIGEgZGlhbG9nIGVsZW1lbnQuIFN0YXlzIGZpeGVkIHRvIHRoZSB0b3Agb2YgdGhlIGRpYWxvZyB3aGVuIHNjcm9sbGluZy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3N4LW5neC1mYWJyaWMtZGlhbG9nLXRpdGxlXSwgW3N4Tmd4RmFicmljRGlhbG9nVGl0bGVdJyxcclxuICBleHBvcnRBczogJ3N4Tmd4RmFicmljRGlhbG9nVGl0bGUnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtcy1EaWFsb2ctdGl0bGUnLFxyXG4gICAgJ1tpZF0nOiAnaWQnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ1RpdGxlIHtcclxuICBASW5wdXQoKSBpZCA9IGBzeC1uZ3gtZmFicmljLWRpYWxvZy10aXRsZS0ke2RpYWxvZ0VsZW1lbnRVaWQrK31gO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9jb250YWluZXI6IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50KSB7IH1cclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogU2Nyb2xsYWJsZSBjb250ZW50IGNvbnRhaW5lciBvZiBhIGRpYWxvZy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgW3N4LW5neC1mYWJyaWMtZGlhbG9nLWNvbnRlbnRdLCBzeC1uZ3gtZmFicmljLWRpYWxvZy1jb250ZW50LCBbc3hOZ3hGYWJyaWNEaWFsb2dDb250ZW50XWAsXHJcbiAgaG9zdDogeydjbGFzcyc6ICdtcy1EaWFsb2ctY29udGVudCd9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ0NvbnRlbnQgeyB9XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgdGhlIGJvdHRvbSBhY3Rpb24gYnV0dG9ucyBpbiBhIGRpYWxvZy5cclxuICogU3RheXMgZml4ZWQgdG8gdGhlIGJvdHRvbSB3aGVuIHNjcm9sbGluZy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgW3N4LW5neC1mYWJyaWMtZGlhbG9nLWFjdGlvbnNdLCBzeC1uZ3gtZmFicmljLWRpYWxvZy1hY3Rpb25zLCBbc3hOZ3hGYWJyaWNEaWFsb2dBY3Rpb25zXWAsXHJcbiAgaG9zdDogeydjbGFzcyc6ICdtcy1EaWFsb2ctYWN0aW9ucyd9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ0FjdGlvbnMgeyB9XHJcbiJdfQ==