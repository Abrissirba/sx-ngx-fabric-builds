import { Component, Input, ChangeDetectorRef, forwardRef, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { Guid } from '../utils/guid';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
var _c0 = ["*"];
var ToggleComponent = /** @class */ (function () {
    function ToggleComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this._checked = false;
        this.disabled = false;
        this.offText = 'Off';
        this.onText = 'On';
        this.textLeft = false;
        this.inputId = Guid.uniqueid();
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    Object.defineProperty(ToggleComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            if (checked !== this.checked) {
                this._checked = checked;
                this.changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "classIsDisabled", {
        get: function () { return this.disabled; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleComponent.prototype, "classTextLeft", {
        get: function () { return this.textLeft; },
        enumerable: true,
        configurable: true
    });
    ToggleComponent.prototype.onInputClick = function (evt) {
        evt.stopPropagation();
        this.toggle();
    };
    ToggleComponent.prototype.toggle = function () {
        this.checked = !this.checked;
        this._onChange(this.checked);
    };
    // ControlValueAccessor implementation
    ToggleComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.markForCheck();
    };
    ToggleComponent.prototype.writeValue = function (val) {
        this.checked = val;
    };
    ToggleComponent.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    ToggleComponent.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    ToggleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToggleComponent, selectors: [["sx-ngx-fabric-toggle"]], hostAttrs: [1, "ms-Toggle"], hostVars: 4, hostBindings: function ToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("is-disabled", ctx.classIsDisabled)("ms-Toggle--textLeft", ctx.classTextLeft);
        } }, inputs: { checked: "checked", disabled: "disabled", offText: "offText", onText: "onText", textLeft: "textLeft" }, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ToggleComponent; }),
                    multi: true
                }])], ngContentSelectors: _c0, decls: 8, vars: 8, consts: [[1, "ms-Toggle-description"], ["type", "checkbox", 1, "ms-Toggle-input", 3, "checked", "disabled", "click"], [1, "ms-Toggle-field"], [1, "ms-Label", "ms-Label--off"], [1, "ms-Label", "ms-Label--on"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "input", 1);
            i0.ɵɵlistener("click", function ToggleComponent_Template_input_click_2_listener($event) { return ctx.onInputClick($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label", 2);
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 4);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
            i0.ɵɵattribute("id", ctx.inputId);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-selected", ctx.checked);
            i0.ɵɵattribute("for", ctx.inputId);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.offText);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.onText);
        } }, styles: [".ms-Toggle[_nghost-%COMP%]{font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;box-sizing:border-box;margin:0 0 8px;padding:0;box-shadow:none;position:relative;display:block}.ms-Toggle-description[_ngcontent-%COMP%]{color:#333;box-sizing:border-box;box-shadow:none;display:block;word-wrap:break-word;overflow-wrap:break-word;margin:0;padding:5px 0}.ms-Toggle-input[_ngcontent-%COMP%]{display:none}.ms-Toggle-field[_ngcontent-%COMP%]{position:relative;display:inline-block;width:45px;height:20px;box-sizing:border-box;border:1px solid #a6a6a6;border-radius:20px;cursor:pointer;-webkit-transition:.1s;transition:.1s;outline:0}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{position:absolute;top:4px;width:10px;height:10px;border-radius:10px;content:'';left:4px;background-color:#333;outline:transparent solid 1px;-webkit-transition:.1s;transition:.1s}.ms-Toggle[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{position:relative;padding:0 0 0 50px}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--off[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:none}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]   .ms-Label--on[_ngcontent-%COMP%]{display:block}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#0078d4;border-color:#0078d4}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:focus, .ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:hover{background-color:#106ebe;border-color:#106ebe}.ms-Toggle[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]:before{background-color:#fff;left:28px}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{background-color:#fff;border-color:#c8c8c8;pointer-events:none;cursor:default}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field.is-selected[_ngcontent-%COMP%]{background-color:#c8c8c8}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]:before{background-color:#fff}.ms-Toggle.is-disabled[_nghost-%COMP%]   .ms-Label[_ngcontent-%COMP%]{color:#a6a6a6}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-field[_ngcontent-%COMP%]{margin-right:24px}.ms-Toggle.ms-Toggle--textLeft[_nghost-%COMP%]   .ms-Toggle-description[_ngcontent-%COMP%]{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}"], changeDetection: 0 });
    return ToggleComponent;
}());
export { ToggleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToggleComponent, [{
        type: Component,
        args: [{
                selector: 'sx-ngx-fabric-toggle',
                templateUrl: './toggle.component.html',
                styleUrls: ['./toggle.component.scss'],
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return ToggleComponent; }),
                        multi: true
                    }],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    'class': 'ms-Toggle'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { checked: [{
            type: Input
        }], disabled: [{
            type: Input
        }], offText: [{
            type: Input
        }], onText: [{
            type: Input
        }], textLeft: [{
            type: Input
        }], classIsDisabled: [{
            type: HostBinding,
            args: ['class.is-disabled']
        }], classTextLeft: [{
            type: HostBinding,
            args: ['class.ms-Toggle--textLeft']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N4LW5neC1mYWJyaWMvIiwic291cmNlcyI6WyJsaWIvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQudHMiLCJsaWIvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlILE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVuRDtJQTJDRSx5QkFDVSxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQTNCdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVloQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUVkLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFNMUIsWUFBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQXNCbEIsY0FBUyxHQUFHLFVBQUMsQ0FBTSxJQUFPLENBQUMsQ0FBQztRQUM1QixlQUFVLEdBQUcsY0FBUSxDQUFDLENBQUM7SUFuQjNCLENBQUM7SUEzQkwsc0JBQWEsb0NBQU87YUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVksT0FBZ0I7WUFDMUIsSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN2QztRQUNILENBQUM7OztPQVBBO0lBaUJELHNCQUFzQyw0Q0FBZTthQUFyRCxjQUEwRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUVqRixzQkFBOEMsMENBQWE7YUFBM0QsY0FBZ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFRdkYsc0NBQVksR0FBWixVQUFhLEdBQWU7UUFDMUIsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsMENBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBS00sb0NBQVUsR0FBakIsVUFBa0IsR0FBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRU0sMENBQWdCLEdBQXZCLFVBQXdCLEVBQW9CLElBQVUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLDJDQUFpQixHQUF4QixVQUF5QixFQUFjLElBQVUsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2tGQXhEN0QsZUFBZTt3REFBZixlQUFlOztnS0FYZixDQUFDO29CQUNWLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUM7b0JBQzlDLEtBQUssRUFBRSxJQUFJO2lCQUNaLENBQUM7O1lDWkosK0JBQW9DO1lBQUEsa0JBQVk7WUFBYSxpQkFBTztZQUNwRSxnQ0FDQTtZQUQrRCxpR0FBUyx3QkFBb0IsSUFBQztZQUE3RixpQkFDQTtZQUFBLGdDQUNFO1lBQUEsK0JBQXFDO1lBQUEsWUFBYTtZQUFBLGlCQUFPO1lBQ3pELCtCQUFvQztZQUFBLFlBQVk7WUFBQSxpQkFBTztZQUN6RCxpQkFBUTs7WUFKbUMsZUFBbUI7WUFBbkIscUNBQW1CLDBCQUFBO1lBQXZDLGlDQUFtQjtZQUNVLGVBQTZCO1lBQTdCLDBDQUE2QjtZQUExRSxrQ0FBb0I7WUFDWSxlQUFhO1lBQWIsaUNBQWE7WUFDZCxlQUFZO1lBQVosZ0NBQVk7OzBCREpsRDtDQTZFQyxBQXpFRCxJQXlFQztTQTFEWSxlQUFlO2tEQUFmLGVBQWU7Y0FmM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO3dCQUM5QyxLQUFLLEVBQUUsSUFBSTtxQkFDWixDQUFDO2dCQUNGLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLFdBQVc7aUJBQ3JCO2FBQ0Y7O2tCQUlFLEtBQUs7O2tCQVdMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLFdBQVc7bUJBQUMsbUJBQW1COztrQkFFL0IsV0FBVzttQkFBQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gJy4uL3V0aWxzL2d1aWQnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3gtbmd4LWZhYnJpYy10b2dnbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVG9nZ2xlQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ2NsYXNzJzogJ21zLVRvZ2dsZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVDb21wb25lbnQge1xyXG5cclxuICBwcml2YXRlIF9jaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZ2V0IGNoZWNrZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcclxuICB9XHJcblxyXG4gIHNldCBjaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChjaGVja2VkICE9PSB0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgdGhpcy5fY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKSBvZmZUZXh0ID0gJ09mZic7XHJcblxyXG4gIEBJbnB1dCgpIG9uVGV4dCA9ICdPbic7XHJcblxyXG4gIEBJbnB1dCgpIHRleHRMZWZ0ID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtZGlzYWJsZWQnKSBnZXQgY2xhc3NJc0Rpc2FibGVkKCkgeyByZXR1cm4gdGhpcy5kaXNhYmxlZDsgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1zLVRvZ2dsZS0tdGV4dExlZnQnKSBnZXQgY2xhc3NUZXh0TGVmdCgpIHsgcmV0dXJuIHRoaXMudGV4dExlZnQ7IH1cclxuXHJcbiAgaW5wdXRJZCA9IEd1aWQudW5pcXVlaWQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG9uSW5wdXRDbGljayhldnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5jaGVja2VkKTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9vbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuICBwcml2YXRlIF9vblRvdWNoZWQgPSAoKSA9PiB7IH07XHJcblxyXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbDogYW55KSB7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQgeyB0aGlzLl9vbkNoYW5nZSA9IGZuOyB9XHJcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7IHRoaXMuX29uVG91Y2hlZCA9IGZuOyB9XHJcblxyXG59XHJcbiIsIjxzcGFuIGNsYXNzPVwibXMtVG9nZ2xlLWRlc2NyaXB0aW9uXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pjwvc3Bhbj5cclxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFthdHRyLmlkXT1cImlucHV0SWRcIiBbY2hlY2tlZF09XCJjaGVja2VkXCIgKGNsaWNrKT1cIm9uSW5wdXRDbGljaygkZXZlbnQpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgY2xhc3M9XCJtcy1Ub2dnbGUtaW5wdXRcIiAvPlxyXG48bGFiZWwgW2F0dHIuZm9yXT1cImlucHV0SWRcIiBjbGFzcz1cIm1zLVRvZ2dsZS1maWVsZFwiIFtjbGFzcy5pcy1zZWxlY3RlZF09XCJjaGVja2VkXCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJtcy1MYWJlbCBtcy1MYWJlbC0tb2ZmXCI+e3sgb2ZmVGV4dCB9fTwvc3Bhbj5cclxuICA8c3BhbiBjbGFzcz1cIm1zLUxhYmVsIG1zLUxhYmVsLS1vblwiPnt7IG9uVGV4dCB9fTwvc3Bhbj5cclxuPC9sYWJlbD4iXX0=