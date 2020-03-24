import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
const _c0 = ["portalOutlet"];
function SxNgxDialogContainerComponent_ng_template_0_Template(rf, ctx) { }
export class SxNgxDialogContainerComponent extends BasePortalOutlet {
    constructor(_elementRef, 
    // private _focusTrapFactory: FocusTrapFactory,
    _changeDetectorRef, _document) {
        super();
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._document = _document;
    }
    attachComponentPortal(portal) {
        // if (this._portalOutlet.hasAttached()) {
        //   throw new Error('Has already attached')
        // }
        return this._portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        throw new Error('Method not implemented.');
    }
}
SxNgxDialogContainerComponent.ɵfac = function SxNgxDialogContainerComponent_Factory(t) { return new (t || SxNgxDialogContainerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
SxNgxDialogContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SxNgxDialogContainerComponent, selectors: [["sx-ngx-fabric-dialog-container"]], viewQuery: function SxNgxDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["cdkPortalOutlet", ""], ["portalOutlet", "cdkPortalOutlet"]], template: function SxNgxDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SxNgxDialogContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i1.CdkPortalOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SxNgxDialogContainerComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-dialog-container',
                templateUrl: './dialog-container.component.html'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { _portalOutlet: [{
            type: ViewChild,
            args: ['portalOutlet', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyIsImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFtQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFnQixVQUFVLEVBQW1CLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQU9ySSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsZ0JBQWdCO0lBTWpFLFlBQ1UsV0FBdUI7SUFDL0IsK0NBQStDO0lBQ3ZDLGtCQUFxQyxFQUNQLFNBQWM7UUFFcEQsS0FBSyxFQUFFLENBQUM7UUFMQSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUV2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ1AsY0FBUyxHQUFULFNBQVMsQ0FBSztJQUd0RCxDQUFDO0lBRUQscUJBQXFCLENBQUksTUFBMEI7UUFDakQsMENBQTBDO1FBQzFDLDRDQUE0QztRQUM1QyxJQUFJO1FBRUosT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxvQkFBb0IsQ0FBSSxNQUF5QjtRQUMvQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7MEdBeEJVLDZCQUE2Qix3R0FVbEIsUUFBUTtrRUFWbkIsNkJBQTZCOzs7Ozs7UUNUMUMsNEhBQThEOztrRERTakQsNkJBQTZCO2NBSnpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEOztzQkFXSSxRQUFROztzQkFBSSxNQUFNO3VCQUFDLFFBQVE7O2tCQVI3QixTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUG9ydGFsT3V0bGV0LCBDZGtQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0LCBPcHRpb25hbCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnIH0gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy1kaWFsb2ctY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN4Tmd4RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVBvcnRhbE91dGxldCB7XHJcbiAgLyoqIFRoZSBwb3J0YWwgb3V0bGV0IGluc2lkZSBvZiB0aGlzIGNvbnRhaW5lciBpbnRvIHdoaWNoIHRoZSBkaWFsb2cgY29udGVudCB3aWxsIGJlIGxvYWRlZC4gKi9cclxuICBAVmlld0NoaWxkKCdwb3J0YWxPdXRsZXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBfcG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XHJcblxyXG4gIF9jb25maWc6IFN4Tmd4RmFicmljRGlhbG9nQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAvLyBwcml2YXRlIF9mb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGF0dGFjaENvbXBvbmVudFBvcnRhbDxUPihwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPik6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICAvLyBpZiAodGhpcy5fcG9ydGFsT3V0bGV0Lmhhc0F0dGFjaGVkKCkpIHtcclxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdIYXMgYWxyZWFkeSBhdHRhY2hlZCcpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcclxuICB9XHJcbiAgYXR0YWNoVGVtcGxhdGVQb3J0YWw8Qz4ocG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxDPik6IEVtYmVkZGVkVmlld1JlZjxDPiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjcG9ydGFsT3V0bGV0PVwiY2RrUG9ydGFsT3V0bGV0XCIgY2RrUG9ydGFsT3V0bGV0ID48L25nLXRlbXBsYXRlPiJdfQ==