/**
 * @fileoverview added by tsickle
 * Generated from: lib/dialog/dialog-content.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { Directive, Input, Optional } from '@angular/core';
import { SxNgxFabricDialogRef } from './dialog-ref';
/**
 * Counter used to generate unique IDs for dialog elements.
 * @type {?}
 */
var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var SxNgxFabricDialogClose = /** @class */ (function () {
    function SxNgxFabricDialogClose(dialogRef) {
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
    SxNgxFabricDialogClose.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    SxNgxFabricDialogClose.decorators = [
        { type: Directive, args: [{
                    selector: "button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]",
                    exportAs: 'sxNgxFabricDialogClose',
                    host: {
                        '(click)': 'dialogRef.close(dialogResult)',
                        '[attr.aria-label]': 'ariaLabel',
                        'type': 'button',
                    }
                },] }
    ];
    /** @nocollapse */
    SxNgxFabricDialogClose.ctorParameters = function () { return [
        { type: SxNgxFabricDialogRef }
    ]; };
    SxNgxFabricDialogClose.propDecorators = {
        ariaLabel: [{ type: Input, args: ['aria-label',] }],
        dialogResult: [{ type: Input, args: ['sx-ngx-fabric-dialog-close',] }],
        dialogClose: [{ type: Input, args: ['sxNgxFabricDialogClose',] }]
    };
    return SxNgxFabricDialogClose;
}());
export { SxNgxFabricDialogClose };
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
var SxNgxFabricDialogTitle = /** @class */ (function () {
    function SxNgxFabricDialogTitle(_container) {
        this._container = _container;
        this.id = "sx-ngx-fabric-dialog-title-" + dialogElementUid++;
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
    SxNgxFabricDialogTitle.ctorParameters = function () { return [
        { type: SxNgxDialogContainerComponent, decorators: [{ type: Optional }] }
    ]; };
    SxNgxFabricDialogTitle.propDecorators = {
        id: [{ type: Input }]
    };
    return SxNgxFabricDialogTitle;
}());
export { SxNgxFabricDialogTitle };
if (false) {
    /** @type {?} */
    SxNgxFabricDialogTitle.prototype.id;
    /**
     * @type {?}
     * @private
     */
    SxNgxFabricDialogTitle.prototype._container;
}
/**
 * Scrollable content container of a dialog.
 */
var SxNgxFabricDialogContent = /** @class */ (function () {
    function SxNgxFabricDialogContent() {
    }
    SxNgxFabricDialogContent.decorators = [
        { type: Directive, args: [{
                    selector: "[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]",
                    host: { 'class': 'ms-Dialog-content' }
                },] }
    ];
    return SxNgxFabricDialogContent;
}());
export { SxNgxFabricDialogContent };
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var SxNgxFabricDialogActions = /** @class */ (function () {
    function SxNgxFabricDialogActions() {
    }
    SxNgxFabricDialogActions.decorators = [
        { type: Directive, args: [{
                    selector: "[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]",
                    host: { 'class': 'ms-Dialog-actions' }
                },] }
    ];
    return SxNgxFabricDialogActions;
}());
export { SxNgxFabricDialogActions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3gtbmd4LWZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFN0UsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztJQUdoRCxnQkFBZ0IsR0FBRyxDQUFDOzs7O0FBS3hCO0lBa0JFLGdDQUFtQixTQUFvQztRQUFwQyxjQUFTLEdBQVQsU0FBUyxDQUEyQjs7OztRQVBsQyxjQUFTLEdBQVcsY0FBYyxDQUFDO0lBT0csQ0FBQzs7Ozs7SUFFNUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztZQUMxQixhQUFhLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixJQUFJLE9BQU8sQ0FBQyw2QkFBNkI7UUFFOUYsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0VBQW9FO29CQUM5RSxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLCtCQUErQjt3QkFDMUMsbUJBQW1CLEVBQUUsV0FBVzt3QkFDaEMsTUFBTSxFQUFFLFFBQVE7cUJBQ2pCO2lCQUNGOzs7O2dCQWhCUSxvQkFBb0I7Ozs0QkFtQjFCLEtBQUssU0FBQyxZQUFZOytCQUdsQixLQUFLLFNBQUMsNEJBQTRCOzhCQUVsQyxLQUFLLFNBQUMsd0JBQXdCOztJQVdqQyw2QkFBQztDQUFBLEFBM0JELElBMkJDO1NBbEJZLHNCQUFzQjs7Ozs7O0lBRWpDLDJDQUF3RDs7Ozs7SUFHeEQsOENBQXVEOztJQUV2RCw2Q0FBa0Q7O0lBRXRDLDJDQUEyQzs7Ozs7QUFjekQ7SUFXRSxnQ0FBZ0MsVUFBeUM7UUFBekMsZUFBVSxHQUFWLFVBQVUsQ0FBK0I7UUFGaEUsT0FBRSxHQUFHLGdDQUE4QixnQkFBZ0IsRUFBSSxDQUFDO0lBRVksQ0FBQzs7Z0JBWC9FLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0RBQXdEO29CQUNsRSxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxJQUFJLEVBQUU7d0JBQ0osT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsTUFBTSxFQUFFLElBQUk7cUJBQ2I7aUJBQ0Y7Ozs7Z0JBbERRLDZCQUE2Qix1QkFzRHZCLFFBQVE7OztxQkFGcEIsS0FBSzs7SUFJUiw2QkFBQztDQUFBLEFBYkQsSUFhQztTQUxZLHNCQUFzQjs7O0lBQ2pDLG9DQUFpRTs7Ozs7SUFFckQsNENBQTZEOzs7OztBQVEzRTtJQUFBO0lBSXdDLENBQUM7O2dCQUp4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBGQUEwRjtvQkFDcEcsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFDO2lCQUNyQzs7SUFDdUMsK0JBQUM7Q0FBQSxBQUp6QyxJQUl5QztTQUE1Qix3QkFBd0I7Ozs7O0FBT3JDO0lBQUE7SUFJd0MsQ0FBQzs7Z0JBSnhDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEZBQTBGO29CQUNwRyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUM7aUJBQ3JDOztJQUN1QywrQkFBQztDQUFBLEFBSnpDLElBSXlDO1NBQTVCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nUmVmIH0gZnJvbSAnLi9kaWFsb2ctcmVmJztcclxuXHJcbi8qKiBDb3VudGVyIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcyBmb3IgZGlhbG9nIGVsZW1lbnRzLiAqL1xyXG5sZXQgZGlhbG9nRWxlbWVudFVpZCA9IDA7XHJcblxyXG4vKipcclxuICogQnV0dG9uIHRoYXQgd2lsbCBjbG9zZSB0aGUgY3VycmVudCBkaWFsb2cuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYGJ1dHRvbltzeC1uZ3gtZmFicmljLWRpYWxvZy1jbG9zZV0sIGJ1dHRvbltzeE5neEZhYnJpY0RpYWxvZ0Nsb3NlXWAsXHJcbiAgZXhwb3J0QXM6ICdzeE5neEZhYnJpY0RpYWxvZ0Nsb3NlJyxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdkaWFsb2dSZWYuY2xvc2UoZGlhbG9nUmVzdWx0KScsXHJcbiAgICAnW2F0dHIuYXJpYS1sYWJlbF0nOiAnYXJpYUxhYmVsJyxcclxuICAgICd0eXBlJzogJ2J1dHRvbicsIC8vIFByZXZlbnRzIGFjY2lkZW50YWwgZm9ybSBzdWJtaXRzLlxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN4Tmd4RmFicmljRGlhbG9nQ2xvc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIC8qKiBTY3JlZW5yZWFkZXIgbGFiZWwgZm9yIHRoZSBidXR0b24uICovXHJcbiAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgPSAnQ2xvc2UgZGlhbG9nJztcclxuXHJcbiAgLyoqIERpYWxvZyBjbG9zZSBpbnB1dC4gKi9cclxuICBASW5wdXQoJ3N4LW5neC1mYWJyaWMtZGlhbG9nLWNsb3NlJykgZGlhbG9nUmVzdWx0OiBhbnk7XHJcblxyXG4gIEBJbnB1dCgnc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZScpIGRpYWxvZ0Nsb3NlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IFN4Tmd4RmFicmljRGlhbG9nUmVmPGFueT4pIHsgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBjb25zdCBwcm94aWVkQ2hhbmdlID0gY2hhbmdlcy5fc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZSB8fCBjaGFuZ2VzLl9zeE5neEZhYnJpY0RpYWxvZ0Nsb3NlUmVzdWx0O1xyXG5cclxuICAgIGlmIChwcm94aWVkQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nUmVzdWx0ID0gcHJveGllZENoYW5nZS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGl0bGUgb2YgYSBkaWFsb2cgZWxlbWVudC4gU3RheXMgZml4ZWQgdG8gdGhlIHRvcCBvZiB0aGUgZGlhbG9nIHdoZW4gc2Nyb2xsaW5nLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc3gtbmd4LWZhYnJpYy1kaWFsb2ctdGl0bGVdLCBbc3hOZ3hGYWJyaWNEaWFsb2dUaXRsZV0nLFxyXG4gIGV4cG9ydEFzOiAnc3hOZ3hGYWJyaWNEaWFsb2dUaXRsZScsXHJcbiAgaG9zdDoge1xyXG4gICAgJ2NsYXNzJzogJ21zLURpYWxvZy10aXRsZScsXHJcbiAgICAnW2lkXSc6ICdpZCcsXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN4Tmd4RmFicmljRGlhbG9nVGl0bGUge1xyXG4gIEBJbnB1dCgpIGlkID0gYHN4LW5neC1mYWJyaWMtZGlhbG9nLXRpdGxlLSR7ZGlhbG9nRWxlbWVudFVpZCsrfWA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgX2NvbnRhaW5lcjogU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQpIHsgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBTY3JvbGxhYmxlIGNvbnRlbnQgY29udGFpbmVyIG9mIGEgZGlhbG9nLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBbc3gtbmd4LWZhYnJpYy1kaWFsb2ctY29udGVudF0sIHN4LW5neC1mYWJyaWMtZGlhbG9nLWNvbnRlbnQsIFtzeE5neEZhYnJpY0RpYWxvZ0NvbnRlbnRdYCxcclxuICBob3N0OiB7J2NsYXNzJzogJ21zLURpYWxvZy1jb250ZW50J31cclxufSlcclxuZXhwb3J0IGNsYXNzIFN4Tmd4RmFicmljRGlhbG9nQ29udGVudCB7IH1cclxuXHJcblxyXG4vKipcclxuICogQ29udGFpbmVyIGZvciB0aGUgYm90dG9tIGFjdGlvbiBidXR0b25zIGluIGEgZGlhbG9nLlxyXG4gKiBTdGF5cyBmaXhlZCB0byB0aGUgYm90dG9tIHdoZW4gc2Nyb2xsaW5nLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBbc3gtbmd4LWZhYnJpYy1kaWFsb2ctYWN0aW9uc10sIHN4LW5neC1mYWJyaWMtZGlhbG9nLWFjdGlvbnMsIFtzeE5neEZhYnJpY0RpYWxvZ0FjdGlvbnNdYCxcclxuICBob3N0OiB7J2NsYXNzJzogJ21zLURpYWxvZy1hY3Rpb25zJ31cclxufSlcclxuZXhwb3J0IGNsYXNzIFN4Tmd4RmFicmljRGlhbG9nQWN0aW9ucyB7IH1cclxuIl19