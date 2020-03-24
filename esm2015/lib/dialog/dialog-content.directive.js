import { SxNgxDialogContainerComponent } from './dialog-container.component';
import { Directive, Input, Optional } from '@angular/core';
import { SxNgxFabricDialogRef } from './dialog-ref';
import * as i0 from "@angular/core";
import * as i1 from "./dialog-ref";
import * as i2 from "./dialog-container.component";
/** Counter used to generate unique IDs for dialog elements. */
let dialogElementUid = 0;
/**
 * Button that will close the current dialog.
 */
export class SxNgxFabricDialogClose {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        /** Screenreader label for the button. */
        this.ariaLabel = 'Close dialog';
    }
    ngOnChanges(changes) {
        const proxiedChange = changes._sxNgxFabricDialogClose || changes._sxNgxFabricDialogCloseResult;
        if (proxiedChange) {
            this.dialogResult = proxiedChange.currentValue;
        }
    }
}
SxNgxFabricDialogClose.ɵfac = function SxNgxFabricDialogClose_Factory(t) { return new (t || SxNgxFabricDialogClose)(i0.ɵɵdirectiveInject(i1.SxNgxFabricDialogRef)); };
SxNgxFabricDialogClose.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogClose, selectors: [["button", "sx-ngx-fabric-dialog-close", ""], ["button", "sxNgxFabricDialogClose", ""]], hostAttrs: ["type", "button"], hostVars: 1, hostBindings: function SxNgxFabricDialogClose_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function SxNgxFabricDialogClose_click_HostBindingHandler() { return ctx.dialogRef.close(ctx.dialogResult); });
    } if (rf & 2) {
        i0.ɵɵattribute("aria-label", ctx.ariaLabel);
    } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], dialogResult: ["sx-ngx-fabric-dialog-close", "dialogResult"], dialogClose: ["sxNgxFabricDialogClose", "dialogClose"] }, exportAs: ["sxNgxFabricDialogClose"], features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogClose, [{
        type: Directive,
        args: [{
                selector: `button[sx-ngx-fabric-dialog-close], button[sxNgxFabricDialogClose]`,
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
export class SxNgxFabricDialogTitle {
    constructor(_container) {
        this._container = _container;
        this.id = `sx-ngx-fabric-dialog-title-${dialogElementUid++}`;
    }
}
SxNgxFabricDialogTitle.ɵfac = function SxNgxFabricDialogTitle_Factory(t) { return new (t || SxNgxFabricDialogTitle)(i0.ɵɵdirectiveInject(i2.SxNgxDialogContainerComponent, 8)); };
SxNgxFabricDialogTitle.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogTitle, selectors: [["", "sx-ngx-fabric-dialog-title", ""], ["", "sxNgxFabricDialogTitle", ""]], hostAttrs: [1, "ms-Dialog-title"], hostVars: 1, hostBindings: function SxNgxFabricDialogTitle_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵhostProperty("id", ctx.id);
    } }, inputs: { id: "id" }, exportAs: ["sxNgxFabricDialogTitle"] });
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
export class SxNgxFabricDialogContent {
}
SxNgxFabricDialogContent.ɵfac = function SxNgxFabricDialogContent_Factory(t) { return new (t || SxNgxFabricDialogContent)(); };
SxNgxFabricDialogContent.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogContent, selectors: [["", "sx-ngx-fabric-dialog-content", ""], ["sx-ngx-fabric-dialog-content"], ["", "sxNgxFabricDialogContent", ""]], hostAttrs: [1, "ms-Dialog-content"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogContent, [{
        type: Directive,
        args: [{
                selector: `[sx-ngx-fabric-dialog-content], sx-ngx-fabric-dialog-content, [sxNgxFabricDialogContent]`,
                host: { 'class': 'ms-Dialog-content' }
            }]
    }], null, null); })();
/**
 * Container for the bottom action buttons in a dialog.
 * Stays fixed to the bottom when scrolling.
 */
export class SxNgxFabricDialogActions {
}
SxNgxFabricDialogActions.ɵfac = function SxNgxFabricDialogActions_Factory(t) { return new (t || SxNgxFabricDialogActions)(); };
SxNgxFabricDialogActions.ɵdir = i0.ɵɵdefineDirective({ type: SxNgxFabricDialogActions, selectors: [["", "sx-ngx-fabric-dialog-actions", ""], ["sx-ngx-fabric-dialog-actions"], ["", "sxNgxFabricDialogActions", ""]], hostAttrs: [1, "ms-Dialog-actions"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxFabricDialogActions, [{
        type: Directive,
        args: [{
                selector: `[sx-ngx-fabric-dialog-actions], sx-ngx-fabric-dialog-actions, [sxNgxFabricDialogActions]`,
                host: { 'class': 'ms-Dialog-actions' }
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3gtbmd4LWZhYnJpYy8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTdFLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUVwRCwrREFBK0Q7QUFDL0QsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFFekI7O0dBRUc7QUFVSCxNQUFNLE9BQU8sc0JBQXNCO0lBU2pDLFlBQW1CLFNBQW9DO1FBQXBDLGNBQVMsR0FBVCxTQUFTLENBQTJCO1FBUnZELHlDQUF5QztRQUNwQixjQUFTLEdBQVcsY0FBYyxDQUFDO0lBT0csQ0FBQztJQUU1RCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixJQUFJLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztRQUUvRixJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7U0FDaEQ7SUFDSCxDQUFDOzs0RkFqQlUsc0JBQXNCOzJEQUF0QixzQkFBc0I7Ozs7O2tEQUF0QixzQkFBc0I7Y0FUbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvRUFBb0U7Z0JBQzlFLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsK0JBQStCO29CQUMxQyxtQkFBbUIsRUFBRSxXQUFXO29CQUNoQyxNQUFNLEVBQUUsUUFBUTtpQkFDakI7YUFDRjs7a0JBR0UsS0FBSzttQkFBQyxZQUFZOztrQkFHbEIsS0FBSzttQkFBQyw0QkFBNEI7O2tCQUVsQyxLQUFLO21CQUFDLHdCQUF3Qjs7QUFhakM7O0dBRUc7QUFTSCxNQUFNLE9BQU8sc0JBQXNCO0lBR2pDLFlBQWdDLFVBQXlDO1FBQXpDLGVBQVUsR0FBVixVQUFVLENBQStCO1FBRmhFLE9BQUUsR0FBRyw4QkFBOEIsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO0lBRVksQ0FBQzs7NEZBSG5FLHNCQUFzQjsyREFBdEIsc0JBQXNCOzs7a0RBQXRCLHNCQUFzQjtjQVJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdEQUF3RDtnQkFDbEUsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLE1BQU0sRUFBRSxJQUFJO2lCQUNiO2FBQ0Y7O3NCQUljLFFBQVE7O2tCQUZwQixLQUFLOztBQU9SOztHQUVHO0FBS0gsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3Qjs2REFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwRkFBMEY7Z0JBQ3BHLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBQzthQUNyQzs7QUFJRDs7O0dBR0c7QUFLSCxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzZEQUF4Qix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUpwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBGQUEwRjtnQkFDcEcsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFDO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7RGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dSZWYgfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xyXG5cclxuLyoqIENvdW50ZXIgdXNlZCB0byBnZW5lcmF0ZSB1bmlxdWUgSURzIGZvciBkaWFsb2cgZWxlbWVudHMuICovXHJcbmxldCBkaWFsb2dFbGVtZW50VWlkID0gMDtcclxuXHJcbi8qKlxyXG4gKiBCdXR0b24gdGhhdCB3aWxsIGNsb3NlIHRoZSBjdXJyZW50IGRpYWxvZy5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgYnV0dG9uW3N4LW5neC1mYWJyaWMtZGlhbG9nLWNsb3NlXSwgYnV0dG9uW3N4Tmd4RmFicmljRGlhbG9nQ2xvc2VdYCxcclxuICBleHBvcnRBczogJ3N4Tmd4RmFicmljRGlhbG9nQ2xvc2UnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ2RpYWxvZ1JlZi5jbG9zZShkaWFsb2dSZXN1bHQpJyxcclxuICAgICdbYXR0ci5hcmlhLWxhYmVsXSc6ICdhcmlhTGFiZWwnLFxyXG4gICAgJ3R5cGUnOiAnYnV0dG9uJywgLy8gUHJldmVudHMgYWNjaWRlbnRhbCBmb3JtIHN1Ym1pdHMuXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNEaWFsb2dDbG9zZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgLyoqIFNjcmVlbnJlYWRlciBsYWJlbCBmb3IgdGhlIGJ1dHRvbi4gKi9cclxuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyA9ICdDbG9zZSBkaWFsb2cnO1xyXG5cclxuICAvKiogRGlhbG9nIGNsb3NlIGlucHV0LiAqL1xyXG4gIEBJbnB1dCgnc3gtbmd4LWZhYnJpYy1kaWFsb2ctY2xvc2UnKSBkaWFsb2dSZXN1bHQ6IGFueTtcclxuXHJcbiAgQElucHV0KCdzeE5neEZhYnJpY0RpYWxvZ0Nsb3NlJykgZGlhbG9nQ2xvc2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogU3hOZ3hGYWJyaWNEaWFsb2dSZWY8YW55PikgeyB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGNvbnN0IHByb3hpZWRDaGFuZ2UgPSBjaGFuZ2VzLl9zeE5neEZhYnJpY0RpYWxvZ0Nsb3NlIHx8IGNoYW5nZXMuX3N4Tmd4RmFicmljRGlhbG9nQ2xvc2VSZXN1bHQ7XHJcblxyXG4gICAgaWYgKHByb3hpZWRDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5kaWFsb2dSZXN1bHQgPSBwcm94aWVkQ2hhbmdlLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaXRsZSBvZiBhIGRpYWxvZyBlbGVtZW50LiBTdGF5cyBmaXhlZCB0byB0aGUgdG9wIG9mIHRoZSBkaWFsb2cgd2hlbiBzY3JvbGxpbmcuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzeC1uZ3gtZmFicmljLWRpYWxvZy10aXRsZV0sIFtzeE5neEZhYnJpY0RpYWxvZ1RpdGxlXScsXHJcbiAgZXhwb3J0QXM6ICdzeE5neEZhYnJpY0RpYWxvZ1RpdGxlJyxcclxuICBob3N0OiB7XHJcbiAgICAnY2xhc3MnOiAnbXMtRGlhbG9nLXRpdGxlJyxcclxuICAgICdbaWRdJzogJ2lkJyxcclxuICB9LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNEaWFsb2dUaXRsZSB7XHJcbiAgQElucHV0KCkgaWQgPSBgc3gtbmd4LWZhYnJpYy1kaWFsb2ctdGl0bGUtJHtkaWFsb2dFbGVtZW50VWlkKyt9YDtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSBfY29udGFpbmVyOiBTeE5neERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudCkgeyB9XHJcblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFNjcm9sbGFibGUgY29udGVudCBjb250YWluZXIgb2YgYSBkaWFsb2cuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYFtzeC1uZ3gtZmFicmljLWRpYWxvZy1jb250ZW50XSwgc3gtbmd4LWZhYnJpYy1kaWFsb2ctY29udGVudCwgW3N4Tmd4RmFicmljRGlhbG9nQ29udGVudF1gLFxyXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbXMtRGlhbG9nLWNvbnRlbnQnfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNEaWFsb2dDb250ZW50IHsgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb250YWluZXIgZm9yIHRoZSBib3R0b20gYWN0aW9uIGJ1dHRvbnMgaW4gYSBkaWFsb2cuXHJcbiAqIFN0YXlzIGZpeGVkIHRvIHRoZSBib3R0b20gd2hlbiBzY3JvbGxpbmcuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYFtzeC1uZ3gtZmFicmljLWRpYWxvZy1hY3Rpb25zXSwgc3gtbmd4LWZhYnJpYy1kaWFsb2ctYWN0aW9ucywgW3N4Tmd4RmFicmljRGlhbG9nQWN0aW9uc11gLFxyXG4gIGhvc3Q6IHsnY2xhc3MnOiAnbXMtRGlhbG9nLWFjdGlvbnMnfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hGYWJyaWNEaWFsb2dBY3Rpb25zIHsgfVxyXG4iXX0=