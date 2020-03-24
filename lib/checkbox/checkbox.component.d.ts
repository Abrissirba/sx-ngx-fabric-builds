import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CheckboxComponent {
    private changeDetectorRef;
    private _checked;
    get checked(): boolean;
    set checked(checked: boolean);
    disabled: boolean;
    inputId: string;
    constructor(changeDetectorRef: ChangeDetectorRef);
    onInputClick(evt: MouseEvent): void;
    toggle(): void;
    setDisabledState(isDisabled: boolean): void;
    private _onChange;
    private _onTouched;
    writeValue(val: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDef<CheckboxComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CheckboxComponent, "sx-ngx-fabric-checkbox", never, { "checked": "checked"; "disabled": "disabled"; }, {}, never>;
}
