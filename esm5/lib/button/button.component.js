import { Component, Input } from '@angular/core';
import { HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["sx-ngx-fabric-button", ""];
var _c1 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.primary = false;
        this.classes = true;
    }
    Object.defineProperty(ButtonComponent.prototype, "classPrimary", {
        get: function () { return this.primary; },
        enumerable: true,
        configurable: true
    });
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    ButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["button", "sx-ngx-fabric-button", ""], ["a", "sx-ngx-fabric-button", ""]], hostVars: 4, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("ms-Button", ctx.classes)("ms-Button--primary", ctx.classPrimary);
        } }, inputs: { primary: "primary" }, attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [[1, "ms-Button-label"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]:hover{background-color:#eaeaea;border:1px solid #eaeaea}[_nghost-%COMP%], [_nghost-%COMP%]:active{box-sizing:border-box;box-shadow:none;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;color:#333;font-size:14px;font-weight:400;background-color:#f4f4f4;border:1px solid #f4f4f4;cursor:pointer;display:inline-block;height:32px;min-width:80px;padding:4px 20px 6px;outline:0;text-align:center}.ms-Button-label[_ngcontent-%COMP%]{color:#333;font-weight:600;font-size:14px}.ms-Button--primary[_nghost-%COMP%]:hover{background-color:#005a9e;border-color:#005a9e}.ms-Button--primary[_nghost-%COMP%], .ms-Button--primary[_nghost-%COMP%]:active{background-color:#0078d4;border-color:#0078d4}.ms-Button--primary[_nghost-%COMP%]   .ms-Button-label[_ngcontent-%COMP%]{color:#fff}[disabled][_nghost-%COMP%], [disabled][_nghost-%COMP%]:active, [disabled][_nghost-%COMP%]:hover{cursor:default;background-color:#f4f4f4;border-color:#f4f4f4}[disabled][_nghost-%COMP%]   .ms-Button-label[_ngcontent-%COMP%]{color:#a6a6a6}"] });
    return ButtonComponent;
}());
export { ButtonComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{
                selector: 'button[sx-ngx-fabric-button], a[sx-ngx-fabric-button]',
                styleUrls: ['./button.component.scss'],
                templateUrl: './button.component.html',
            }]
    }], function () { return []; }, { primary: [{
            type: Input
        }], classes: [{
            type: HostBinding,
            args: ['class.ms-Button']
        }], classPrimary: [{
            type: HostBinding,
            args: ['class.ms-Button--primary']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiLCJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTVDO0lBY0U7UUFOUyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRU8sWUFBTyxHQUFHLElBQUksQ0FBQztJQUkvQixDQUFDO0lBRmpCLHNCQUE2Qyx5Q0FBWTthQUF6RCxjQUE4RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUlwRixrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztrRkFYVSxlQUFlO3dEQUFmLGVBQWU7Ozs7WUNUNUIsOEJBQTZCO1lBQUEsa0JBQVk7WUFBYSxpQkFBTTs7MEJEQTVEO0NBc0JDLEFBbkJELElBbUJDO1NBYlksZUFBZTtrREFBZixlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdURBQXVEO2dCQUNqRSxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsV0FBVyxFQUFFLHlCQUF5QjthQUV2Qzs7a0JBR0UsS0FBSzs7a0JBRUwsV0FBVzttQkFBQyxpQkFBaUI7O2tCQUU3QixXQUFXO21CQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdidXR0b25bc3gtbmd4LWZhYnJpYy1idXR0b25dLCBhW3N4LW5neC1mYWJyaWMtYnV0dG9uXScsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgLy8gaG9zdDogeydjbGFzcyc6ICdtYXQtYnV0dG9uJ31cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHByaW1hcnkgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1CdXR0b24nKSBjbGFzc2VzID0gdHJ1ZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tcy1CdXR0b24tLXByaW1hcnknKSBnZXQgY2xhc3NQcmltYXJ5KCkgeyByZXR1cm4gdGhpcy5wcmltYXJ5OyB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1zLUJ1dHRvbi1sYWJlbFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj4iXX0=