import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { Directive, Input, Optional } from '@angular/core';
import { SxNgxFabricDialogRef } from './dialog-ref';
import * as i0 from "@angular/core";
import * as i1 from "./dialog-ref";
import * as i2 from "./dialog-container.component";
/** Counter used to generate unique IDs for dialog elements. */
var dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
var SxNgxFabricDialogClose = /** @class */ (function () {
    function SxNgxFabricDialogClose(dialogRef) {
        this.dialogRef = dialogRef;
        /** Screenreader label for the button. */
        this.ariaLabel = 'Close dialog';
    }
    SxNgxFabricDialogClose.prototype.ngOnChanges = function (changes) {
        var proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    };
    SxNgxFabricDialogClose.ɵfac = function SxNgxFabricDialogClose_Factory(t) { return new (t || SxNgxFabricDialogClose)(i0.ɵɵdirectiveInject(i1.SxNgxFabricDialogRef)); };
    SxNgxFabricDialogClose.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogClose, selectors: [["button", "sx-ngx-fabric-dialog-close", ""], ["button", "sxNgxFabricDialogClose", ""]], hostAttrs: ["type", "button"], hostVars: 1, hostBindings: function SxNgxFabricDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function SxNgxFabricDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-label", ctx.ariaLabel);
        } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], dialogResult: ["sx-ngx-fabric-dialog-close", "dialogResult"], dialogClose: ["sxNgxFabricDialogClose", "dialogClose"] }, exportAs: ["sxNgxFabricDialogClose"], features: [i0.ɵɵNgOnChangesFeature] });
    return SxNgxFabricDialogClose;
}());
export { SxNgxFabricDialogClose };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogClose, [{
        type: Directive,
        args: [{
                selector: "button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]",
                exportAs: 'sxNgxFabricDialogClose',
                host: {
                    '(click)': 'dialogRef.close(dialogResult)',
                    '[attr.aria-label]': 'ariaLabel',
                    'type': 'button',
                }
            }]
    }], function () { return [{ type: i1.SxNgxFabricDialogRef }]; }, { ariaLabel: [{
            type: Input,
            args: ['aria-label']
        }], dialogResult: [{
            type: Input,
            args: ['sx-ngx-fabric-dialog-close']
        }], dialogClose: [{
            type: Input,
            args: ['sxNgxFabricDialogClose']
        }] }); })();
/**
 * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.
 */
var SxNgxFabricDialogTitle = /** @class */ (function () {
    function SxNgxFabricDialogTitle(_container) {
        this._container = _container;
        this.id = "sx-ngx-fabric-dialog-title-" + dialogElementUid++;
    }
    SxNgxFabricDialogTitle.ɵfac = function SxNgxFabricDialogTitle_Factory(t) { return new (t || SxNgxFabricDialogTitle)(i0.ɵɵdirectiveInject(i2.SxNgxDialogContainerComponent, 8)); };
    SxNgxFabricDialogTitle.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogTitle, selectors: [["", "sx-ngx-fabric-dialog-title", ""], ["", "sxNgxFabricDialogTitle", ""]], hostAttrs: [1, "ms-Dialog-title"], hostVars: 1, hostBindings: function SxNgxFabricDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵhostProperty("id", ctx.id);
        } }, inputs: { id: "id" }, exportAs: ["sxNgxFabricDialogTitle"] });
    return SxNgxFabricDialogTitle;
}());
export { SxNgxFabricDialogTitle };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogTitle, [{
        type: Directive,
        args: [{
                selector: '[sx-ngx-fabric-dialog-title], [sxNgxFabricDialogTitle]',
                exportAs: 'sxNgxFabricDialogTitle',
                host: {
                    'class': 'ms-Dialog-title',
                    '[id]': 'id',
                },
            }]
    }], function () { return [{ type: i2.SxNgxDialogContainerComponent, decorators: [{
                type: Optional
            }] }]; }, { id: [{
            type: Input
        }] }); })();
/**
 * Scrollable content container of a dialog.
 */
var SxNgxFabricDialogContent = /** @class */ (function () {
    function SxNgxFabricDialogContent() {
    }
    SxNgxFabricDialogContent.ɵfac = function SxNgxFabricDialogContent_Factory(t) { return new (t || SxNgxFabricDialogContent)(); };
    SxNgxFabricDialogContent.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogContent, selectors: [["", "sx-ngx-fabric-dialog-content", ""], ["sx-ngx-fabric-dialog-content"], ["", "sxNgxFabricDialogContent", ""]], hostAttrs: [1, "ms-Dialog-content"] });
    return SxNgxFabricDialogContent;
}());
export { SxNgxFabricDialogContent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogContent, [{
        type: Directive,
        args: [{
                selector: "[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]",
                host: { 'class': 'ms-Dialog-content' }
            }]
    }], null, null); })();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
var SxNgxFabricDialogActions = /** @class */ (function () {
    function SxNgxFabricDialogActions() {
    }
    SxNgxFabricDialogActions.ɵfac = function SxNgxFabricDialogActions_Factory(t) { return new (t || SxNgxFabricDialogActions)(); };
    SxNgxFabricDialogActions.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogActions, selectors: [["", "sx-ngx-fabric-dialog-actions", ""], ["sx-ngx-fabric-dialog-actions"], ["", "sxNgxFabricDialogActions", ""]], hostAttrs: [1, "ms-Dialog-actions"] });
    return SxNgxFabricDialogActions;
}());
export { SxNgxFabricDialogActions };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogActions, [{
        type: Directive,
        args: [{
                selector: "[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]",
                host: { 'class': 'ms-Dialog-actions' }
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3gtbmd4LWZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTdFLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUVwRCwrREFBK0Q7QUFDL0QsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFFekI7O0dBRUc7QUFDSDtJQWtCRSxnQ0FBbUIsU0FBb0M7UUFBcEMsY0FBUyxHQUFULFNBQVMsQ0FBMkI7UUFSdkQseUNBQXlDO1FBQ3BCLGNBQVMsR0FBVyxjQUFjLENBQUM7SUFPRyxDQUFDO0lBRTVELDRDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsdUJBQXVCLElBQUksT0FBTyxDQUFDLDZCQUE2QixDQUFDO1FBRS9GLElBQUksYUFBYSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQztTQUNoRDtJQUNILENBQUM7Z0dBakJVLHNCQUFzQjsrREFBdEIsc0JBQXNCOzs7OztpQ0FwQm5DO0NBc0NDLEFBM0JELElBMkJDO1NBbEJZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBVGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0VBQW9FO2dCQUM5RSxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLCtCQUErQjtvQkFDMUMsbUJBQW1CLEVBQUUsV0FBVztvQkFDaEMsTUFBTSxFQUFFLFFBQVE7aUJBQ2pCO2FBQ0Y7O2tCQUdFLEtBQUs7bUJBQUMsWUFBWTs7a0JBR2xCLEtBQUs7bUJBQUMsNEJBQTRCOztrQkFFbEMsS0FBSzttQkFBQyx3QkFBd0I7O0FBYWpDOztHQUVHO0FBQ0g7SUFXRSxnQ0FBZ0MsVUFBeUM7UUFBekMsZUFBVSxHQUFWLFVBQVUsQ0FBK0I7UUFGaEUsT0FBRSxHQUFHLGdDQUE4QixnQkFBZ0IsRUFBSSxDQUFDO0lBRVksQ0FBQztnR0FIbkUsc0JBQXNCOytEQUF0QixzQkFBc0I7OztpQ0FuRG5DO0NBd0RDLEFBYkQsSUFhQztTQUxZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBUmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0RBQXdEO2dCQUNsRSxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsTUFBTSxFQUFFLElBQUk7aUJBQ2I7YUFDRjs7c0JBSWMsUUFBUTs7a0JBRnBCLEtBQUs7O0FBT1I7O0dBRUc7QUFDSDtJQUFBO0tBSXlDO29HQUE1Qix3QkFBd0I7aUVBQXhCLHdCQUF3QjttQ0FsRXJDO0NBa0V5QyxBQUp6QyxJQUl5QztTQUE1Qix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUpwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBGQUEwRjtnQkFDcEcsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFDO2FBQ3JDOztBQUlEOzs7R0FHRztBQUNIO0lBQUE7S0FJeUM7b0dBQTVCLHdCQUF3QjtpRUFBeEIsd0JBQXdCO21DQTdFckM7Q0E2RXlDLEFBSnpDLElBSXlDO1NBQTVCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEZBQTBGO2dCQUNwRyxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTeE5neEZhYnJpY0RpYWxvZ1JlZiB9IGZyb20gJy4vZGlhbG9nLXJlZic7XHJcblxyXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIGRpYWxvZyBlbGVtZW50cy4gKi9cclxubGV0IGRpYWxvZ0VsZW1lbnRVaWQgPSAwO1xyXG5cclxuLyoqXHJcbiAqIEJ1dHRvbiB0aGF0IHdpbGwgY2xvc2UgdGhlIGN1cnJlbnQgZGlhbG9nLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBidXR0b25bc3gtbmd4LWZhYnJpYy1kaWFsb2ctY2xvc2VdLCBidXR0b25bc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZV1gLFxyXG4gIGV4cG9ydEFzOiAnc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZScsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnZGlhbG9nUmVmLmNsb3NlKGRpYWxvZ1Jlc3VsdCknLFxyXG4gICAgJ1thdHRyLmFyaWEtbGFiZWxdJzogJ2FyaWFMYWJlbCcsXHJcbiAgICAndHlwZSc6ICdidXR0b24nLCAvLyBQcmV2ZW50cyBhY2NpZGVudGFsIGZvcm0gc3VibWl0cy5cclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ0Nsb3NlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAvKiogU2NyZWVucmVhZGVyIGxhYmVsIGZvciB0aGUgYnV0dG9uLiAqL1xyXG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nID0gJ0Nsb3NlIGRpYWxvZyc7XHJcblxyXG4gIC8qKiBEaWFsb2cgY2xvc2UgaW5wdXQuICovXHJcbiAgQElucHV0KCdzeC1uZ3gtZmFicmljLWRpYWxvZy1jbG9zZScpIGRpYWxvZ1Jlc3VsdDogYW55O1xyXG5cclxuICBASW5wdXQoJ3N4Tmd4RmFicmljRGlhbG9nQ2xvc2UnKSBkaWFsb2dDbG9zZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBTeE5neEZhYnJpY0RpYWxvZ1JlZjxhbnk+KSB7IH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgcHJveGllZENoYW5nZSA9IGNoYW5nZXMuX3N4Tmd4RmFicmljRGlhbG9nQ2xvc2UgfHwgY2hhbmdlcy5fc3hOZ3hGYWJyaWNEaWFsb2dDbG9zZVJlc3VsdDtcclxuXHJcbiAgICBpZiAocHJveGllZENoYW5nZSkge1xyXG4gICAgICB0aGlzLmRpYWxvZ1Jlc3VsdCA9IHByb3hpZWRDaGFuZ2UuY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRpdGxlIG9mIGEgZGlhbG9nIGVsZW1lbnQuIFN0YXlzIGZpeGVkIHRvIHRoZSB0b3Agb2YgdGhlIGRpYWxvZyB3aGVuIHNjcm9sbGluZy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3N4LW5neC1mYWJyaWMtZGlhbG9nLXRpdGxlXSwgW3N4Tmd4RmFicmljRGlhbG9nVGl0bGVdJyxcclxuICBleHBvcnRBczogJ3N4Tmd4RmFicmljRGlhbG9nVGl0bGUnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdjbGFzcyc6ICdtcy1EaWFsb2ctdGl0bGUnLFxyXG4gICAgJ1tpZF0nOiAnaWQnLFxyXG4gIH0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ1RpdGxlIHtcclxuICBASW5wdXQoKSBpZCA9IGBzeC1uZ3gtZmFicmljLWRpYWxvZy10aXRsZS0ke2RpYWxvZ0VsZW1lbnRVaWQrK31gO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIF9jb250YWluZXI6IFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50KSB7IH1cclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogU2Nyb2xsYWJsZSBjb250ZW50IGNvbnRhaW5lciBvZiBhIGRpYWxvZy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgW3N4LW5neC1mYWJyaWMtZGlhbG9nLWNvbnRlbnRdLCBzeC1uZ3gtZmFicmljLWRpYWxvZy1jb250ZW50LCBbc3hOZ3hGYWJyaWNEaWFsb2dDb250ZW50XWAsXHJcbiAgaG9zdDogeydjbGFzcyc6ICdtcy1EaWFsb2ctY29udGVudCd9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ0NvbnRlbnQgeyB9XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5lciBmb3IgdGhlIGJvdHRvbSBhY3Rpb24gYnV0dG9ucyBpbiBhIGRpYWxvZy5cclxuICogU3RheXMgZml4ZWQgdG8gdGhlIGJvdHRvbSB3aGVuIHNjcm9sbGluZy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgW3N4LW5neC1mYWJyaWMtZGlhbG9nLWFjdGlvbnNdLCBzeC1uZ3gtZmFicmljLWRpYWxvZy1hY3Rpb25zLCBbc3hOZ3hGYWJyaWNEaWFsb2dBY3Rpb25zXWAsXHJcbiAgaG9zdDogeydjbGFzcyc6ICdtcy1EaWFsb2ctYWN0aW9ucyd9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeE5neEZhYnJpY0RpYWxvZ0FjdGlvbnMgeyB9XHJcbiJdfQ==