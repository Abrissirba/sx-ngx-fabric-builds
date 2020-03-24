import { __extends } from "tslib";
import { BasePortalOutlet, CdkPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
var _c0 = ["portalOutlet"];
function SxNgxDialogContainerComponent_ng_template_0_Template(rf, ctx) { }
var SxNgxDialogContainerComponent = /** @class */ (function (_super) {
    __extends(SxNgxDialogContainerComponent, _super);
    function SxNgxDialogContainerComponent(_elementRef, 
    // private _focusTrapFactory: FocusTrapFactory,
    _changeDetectorRef, _document) {
        var _this = _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._document = _document;
        return _this;
    }
    SxNgxDialogContainerComponent.prototype.attachComponentPortal = function (portal) {
        // if (this._portalOutlet.hasAttached()) {
        //   throw new Error('Has already attached')
        // }
        return this._portalOutlet.attachComponentPortal(portal);
    };
    SxNgxDialogContainerComponent.prototype.attachTemplatePortal = function (portal) {
        throw new Error('Method not implemented.');
    };
    SxNgxDialogContainerComponent.ɵfac = function SxNgxDialogContainerComponent_Factory(t) { return new (t || SxNgxDialogContainerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
    SxNgxDialogContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SxNgxDialogContainerComponent, selectors: [["sx-ngx-fabric-dialog-container"]], viewQuery: function SxNgxDialogContainerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._portalOutlet = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [["cdkPortalOutlet", ""], ["portalOutlet", "cdkPortalOutlet"]], template: function SxNgxDialogContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SxNgxDialogContainerComponent_ng_template_0_Template, 0, 0, "ng-template", 0, 1, i0.ɵɵtemplateRefExtractor);
        } }, directives: [i1.CdkPortalOutlet], encapsulation: 2 });
    return SxNgxDialogContainerComponent;
}(BasePortalOutlet));
export { SxNgxDialogContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeC1uZ3gtZmFicmljLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC50cyIsImxpYi9kaWFsb2cvZGlhbG9nLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBbUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBZ0IsVUFBVSxFQUFtQixNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHckk7SUFJbUQsaURBQWdCO0lBTWpFLHVDQUNVLFdBQXVCO0lBQy9CLCtDQUErQztJQUN2QyxrQkFBcUMsRUFDUCxTQUFjO1FBSnRELFlBTUUsaUJBQU8sU0FDUjtRQU5TLGlCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRXZCLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDUCxlQUFTLEdBQVQsU0FBUyxDQUFLOztJQUd0RCxDQUFDO0lBRUQsNkRBQXFCLEdBQXJCLFVBQXlCLE1BQTBCO1FBQ2pELDBDQUEwQztRQUMxQyw0Q0FBNEM7UUFDNUMsSUFBSTtRQUVKLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBQ0QsNERBQW9CLEdBQXBCLFVBQXdCLE1BQXlCO1FBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDOzhHQXhCVSw2QkFBNkIsd0dBVWxCLFFBQVE7c0VBVm5CLDZCQUE2Qjs7Ozs7O1lDVDFDLDRIQUE4RDs7d0NEQTlEO0NBa0NDLEFBN0JELENBSW1ELGdCQUFnQixHQXlCbEU7U0F6QlksNkJBQTZCO2tEQUE3Qiw2QkFBNkI7Y0FKekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxtQ0FBbUM7YUFDakQ7O3NCQVdJLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsUUFBUTs7a0JBUjdCLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VQb3J0YWxPdXRsZXQsIENka1BvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3QsIE9wdGlvbmFsLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3hOZ3hGYWJyaWNEaWFsb2dDb25maWcgfSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeC1uZ3gtZmFicmljLWRpYWxvZy1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2ctY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3hOZ3hEaWFsb2dDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlUG9ydGFsT3V0bGV0IHtcclxuICAvKiogVGhlIHBvcnRhbCBvdXRsZXQgaW5zaWRlIG9mIHRoaXMgY29udGFpbmVyIGludG8gd2hpY2ggdGhlIGRpYWxvZyBjb250ZW50IHdpbGwgYmUgbG9hZGVkLiAqL1xyXG4gIEBWaWV3Q2hpbGQoJ3BvcnRhbE91dGxldCcsIHsgc3RhdGljOiB0cnVlIH0pIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcclxuXHJcbiAgX2NvbmZpZzogU3hOZ3hGYWJyaWNEaWFsb2dDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIC8vIHByaXZhdGUgX2ZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXHJcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+KTogQ29tcG9uZW50UmVmPFQ+IHtcclxuICAgIC8vIGlmICh0aGlzLl9wb3J0YWxPdXRsZXQuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ0hhcyBhbHJlYWR5IGF0dGFjaGVkJylcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsT3V0bGV0LmF0dGFjaENvbXBvbmVudFBvcnRhbChwb3J0YWwpO1xyXG4gIH1cclxuICBhdHRhY2hUZW1wbGF0ZVBvcnRhbDxDPihwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPEM+KTogRW1iZWRkZWRWaWV3UmVmPEM+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlICNwb3J0YWxPdXRsZXQ9XCJjZGtQb3J0YWxPdXRsZXRcIiBjZGtQb3J0YWxPdXRsZXQgPjwvbmctdGVtcGxhdGU+Il19